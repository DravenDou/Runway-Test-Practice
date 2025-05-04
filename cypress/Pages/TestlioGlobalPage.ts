/// <reference types="cypress-xpath" />

import Chainable = Cypress.Chainable;
import appObjectsReader from "../excelReader/AppObjectsReader";
import appObjMap from "../appObjects/appObjects";
import ElementProvider from "../pageFactory/ElementProvider";
import Page from "../pageFactory/Page";
import TestlioProjectPage from "./TestlioProjectPage";

require('cypress-xpath')
export default class TestlioGlobalPage extends Page {
    get companyLink() : Chainable<JQuery> {
        return cy.get('a[title="Company"]');
    }
    get xCompanyLink() : Chainable<JQuery> {
        return this.getElement(appObjMap.appObjsType.get('aboutLink'), appObjMap.appObjectLocators.get('aboutLink'));
    }

    get signInLink(): Chainable<JQuery> {
        return this.getElement(appObjMap.appObjsType.get('signInLink'),
            appObjMap.appObjectLocators.get('signInLink'));
    }

    get emailField(): Chainable<JQuery> {
        return this.getElement(appObjMap.appObjsType.get('emailField'),
            appObjMap.appObjectLocators.get('emailField'));
    }

    get passwordField(): Chainable<JQuery> {
        return this.getElement(appObjMap.appObjsType.get('passwordField'),
            appObjMap.appObjectLocators.get('passwordField'));
    }

    get loginButton(): Chainable<JQuery> {
        return this.getElement(appObjMap.appObjsType.get('loginButton'),
            appObjMap.appObjectLocators.get('loginButton'));
    }

    public routes() {
        cy.intercept('GET', '/lead-flows-config/v1/config/json?portalId=*').as('loadFlow');
        cy.intercept('POST', 'https://api-iam.intercom.io/messenger/web/ping/fgh').as('launchDarkly');
    }

    clickAboutLink(): void {
        this.mouseOverOnElement(this.companyLink);
        cy.wait('@loadFlow');
        this.clickOnElementIfVisible(this.xCompanyLink);
    }

    public signIn(): TestlioProjectPage {
        this.clickOnNthMatchingElement(this.signInLink, 1);
        this.typeToElement(this.emailField, 'pawan@testlio.com');
        this.typeToElement(this.passwordField, 'Delight_2022');
        this.clickOnElement(this.loginButton);
        //this.waitForTimeout(45);
        return new TestlioProjectPage();
    }

    public TestsignIn(): TestlioProjectPage {
        this.clickOnNthMatchingElement(this.signInLink, 1);
        this.typeToElement(this.emailField, 'pawan@testlio.com');
        this.typeToElement(this.passwordField, 'Delight_2022');
        this.clickOnElement(this.loginButton);
        //this.waitForTimeout(45);
        return new TestlioProjectPage();
    }
}