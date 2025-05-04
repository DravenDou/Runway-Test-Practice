import appObjMap from "../appObjects/appObjects";
import TestlioGlobalPage from "../Pages/TestlioGlobalPage";
import 'cypress-if'

export default class Sdf extends TestlioGlobalPage {
    public logS() {
       // cy.task('log', 'This will be output to the terminal Part 1' + appObjMap.appObjsType.get('loginButton'));
    }

    public routes() {
        cy.intercept('https://testlio.com/about-us/').as("aboutUs");
    }

    public aboutUsIntercepted() {
       cy.task('log', 'This will be output to the terminal Part 1' + appObjMap.appObjsType.get('loginButton'));
        this.companyLink.click();
        this.xCompanyLink.if('visible').click().else().then(() => {(assert.isNotOk(true, 'Element is visble'))});
        cy.wait('@aboutUs').then(() => {
            cy.log("After waiting")
        });
        cy.task('log', 'wait interecepted');
        cy.log(appObjMap.appObjsType.get('loginButton'));
    }

}
