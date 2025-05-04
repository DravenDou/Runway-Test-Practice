import * as xl from 'xlsx';

class TestListReader {

    map = new Map();
    projectList = [];

    Workbook = xl.readFile('Suites.xlsx');
    sheetToRead = [];

    getTestList(): Map<string, string> {
        const testList = [];

        const sheet = this.Workbook.Sheets.Project;
        const range = xl.utils.decode_range(sheet['!ref']);
        console.log(`Range: ${range.e.r}`);

        for (let i = range.s.r; i <= range.e.r; i++) {
            if (i > 0) {
                const cell = sheet[xl.utils.encode_cell({c: 1, r: i})];
                console.log('Project Name: ' + cell.v.toString());

                const runModeCell = sheet[xl.utils.encode_cell({c: 2, r: i})];
                const platformCell = sheet[xl.utils.encode_cell({c: 3, r: i})];

                if (runModeCell.v.toLowerCase() === 'run') {
                    if (platformCell.v.toLowerCase() === "web") {
                        this.projectList.push(cell.v.toString());
                    }

                }
            }
        }

        this.projectList.forEach((value, index) => {
            console.log(`The value : ${value}, and index : ${index} in project list`);
        });

        const sheetList = this.Workbook.SheetNames;

        const _this = this;

        this.projectList.forEach((item, index) => {
            sheetList.forEach((sheetItem, sheetIndex) => {
                if (item === sheetItem) {
                    _this.sheetToRead.push(item);
                }
            });
        });

        this.sheetToRead.forEach((value, index) => {
            console.log(`The value : ${value}, and index : ${index} in sheetToRead`);
        });

        this.sheetToRead.forEach((item, index) => {
            const currentSheet = _this.Workbook.Sheets[item];
            const currentRange = xl.utils.decode_range(currentSheet['!ref']);

            for (let i = currentRange.s.r; i <= currentRange.e.r; i++) {
                if (i > 0) {
                    const testNameCell = currentSheet[xl.utils.encode_cell({c: 2, r: i})];
                    const suiteDescriptionCell = currentSheet[xl.utils.encode_cell({c: 1, r: i})];
                    const runFlagCell = currentSheet[xl.utils.encode_cell({c: 3, r: i})];
                    console.log(`testNameCell: ${testNameCell.v} suiteDescriptionCell: ${suiteDescriptionCell.v} runFlagCell ${runFlagCell.v}`);
                    if (runFlagCell.v.toLowerCase() === 'run') {
                        // testList.push(testNameCell.v.toString());
                        _this.map.set(suiteDescriptionCell.v.toString(), testNameCell.v.toString());
                    }
                }

            }
        });
        return this.map;
    }
}

export default new TestListReader();
