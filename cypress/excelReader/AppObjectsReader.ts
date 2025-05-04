import * as xl from 'xlsx';
import * as fs from "fs";
//@ts-ignore
import Workbook from 'AppObjectRepository.xlsx'


class AppObjectReader {
    //Workbook;
    sheetToRead = [];

    readAppObjectsLocators() {
        let appObjectLocatorMap: Map<string, string>;
        appObjectLocatorMap = this.createMapFromPassedColumn(2);
        return appObjectLocatorMap;
    }

    readAppObjectsType() {
        let appObjectTypeMap: Map<string, string>;
        appObjectTypeMap = this.createMapFromPassedColumn(1);
        return appObjectTypeMap;
    }

    createMapFromPassedColumn(columnToRead: number): Map<string, string> {

        const appObjsMap = new Map();
        const sheetList = Workbook.SheetNames;
        const _this = this;
        sheetList.forEach((sheetItem) => {
            const sheet = Workbook.Sheets[sheetItem];
            const range = xl.utils.decode_range(sheet['!ref']);

            for (let i = range.s.r; i <= range.e.r; i++) {
                if (i > 0) {
                    const elementNameCell = sheet[xl.utils.encode_cell({c: 0, r: i})];
                    const elementLocatorCell = sheet[xl.utils.encode_cell({c: columnToRead, r: i})];
                    const elementKey: string = elementNameCell.v.toString();
                    if (appObjsMap.has(elementKey)) {
                        console.log(`${elementKey} element already exists in map, so not adding it again, please check the app repository excel sheet`);
                    } else {
                        appObjsMap.set(elementKey, elementLocatorCell.v.toString());
                    }

                }

            }
        });
        return appObjsMap;
    }

}

export default new AppObjectReader();