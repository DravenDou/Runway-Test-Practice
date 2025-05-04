import AppObjsMap from "../appObjects/appObjects";

export default class Asd {
    logM() {
        cy.log("www.testlio.com");
        cy.wait(23);
        cy.task('log', 'This will be output to the terminal ' + AppObjsMap.appObjsType.get('menuList'))
    }
}