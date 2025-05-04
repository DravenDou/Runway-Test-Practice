import appObjectsReader from "../excelReader/AppObjectsReader";

export default class AppObjsMap {
    // @ts-ignore
    static appObjsType: Map<string, string> = appObjectsReader.readAppObjectsType();
    static appObjectLocators: Map<string, string> = appObjectsReader.readAppObjectsLocators()
}