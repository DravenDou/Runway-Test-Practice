import AppObjsMap from "../appObjects/appObjects";
import Page from "../pageFactory/Page";
import Chainable = Cypress.Chainable;

export default class TestProjectPage extends Page {

    public routes() {
        cy.intercept('GET', 'https://events.launchdarkly.com/a/*');
    }
    get workSpaceDropdown(): Chainable<JQuery> {
        return this.getElement(AppObjsMap.appObjsType.get('workSpaceDropdown'),
        AppObjsMap.appObjectLocators.get('workSpaceDropdown'));
    }


    public selectDropdown(name: string) {
        this.clickOnElement(this.workSpaceDropdown);
        this.clickOnElement(this.scrollToElement(cy.xpath(`//div[text()='${name}']`)));
        //this.clickOnElement(cy.xpath(`//div[text()='${name}']`));
    }
}