/// <reference types="cypress-xpath" />
/// <reference types="cypress-if" />
import Chainable = Cypress.Chainable;

export default class Page {
    
    /**
     * Get Chainable<JQuery> element based on css selector or xpath
     * @param type
     * @param locator
     */
    public getElement(type: string, locator: string): Chainable<JQuery> {
        if (type.toLowerCase() === 'xpath') {
            return cy.xpath(locator);
        } else if (type.toLowerCase() === 'css') {
            return cy.get(locator);
        }
    }

    /**
     * get inner element containing text
     * @param element
     * @param text
     */
    public getInnerElementContainingText(element: Chainable<JQuery>, text: string): Chainable<JQuery> {
        const regex = new RegExp(`^${text}$`);
        return element.contains(regex);
    }

    /**
     * get first inner element
     * @param element
     */
    public getInnerFirstElement(element: Chainable<JQuery>): Chainable<JQuery> {
        return element.first();
    }

    /**
     * get closet element
     * @param element
     * @param selector
     */
    public getClosestElement(element: Chainable<JQuery>, selector: string): Chainable<JQuery> {
        return element.closest(selector);
    }

    /**
     * get parent of element
     * @param element
     */
    public getParent(element: Chainable<JQuery>): Chainable<JQuery> {
        return element.parent();
    }

    /**
     * get all siblings of element
     * @param element
     */
    public getSiblings(element: Chainable<JQuery>): Chainable<JQuery> {
        return element.siblings();
    }

    /**
     * get preceding sibling
     * @param element
     */
    public getPrecedingSibling(element: Chainable<JQuery>): Chainable<JQuery> {
        return element.prev();
    }

    /**
     * get all preceding siblings
     * @param element
     */
    public getAllPrecedingSibilings(element: Chainable<JQuery>): Chainable<JQuery> {
        return element.prevAll();
    }


    /**
     * get preceding siblings until selector
     * @param element
     * @param selector
     */
    public getAllPrecedingSibilingsUntilSelector(element: Chainable<JQuery>,
        selector: string): Chainable<JQuery> {
        return element.prevUntil(selector);
    }

    /**
     * get descendent element
     * @param element
     * @param selector
     */
    public getDescendentElement(element: Chainable<JQuery>, selector: string): Chainable<JQuery> {
        return element.find(selector);
    }

    /**
     * filter all inner elements
     * @param element
     * @param selector
     */
    public filterAllInnerElement(element: Chainable<JQuery>, selector: string): Chainable<JQuery> {
        return element.filter(selector);
    }

    /**
     * click on element
     * @param element
     */
    public clickOnElement(element : Chainable<JQuery>): void {
        element.click();
    }

    /**
     * click on nth matching elements
     * @param element
     * @param n
     */
    public clickOnNthMatchingElement(element: Chainable<JQuery>, n: number) : void {
        element.eq(n).click();
    }

    /**
     * mouse over element
     * @param element
     */
    public mouseOverOnElement(element: Chainable<JQuery>): void {
        element.trigger('mouseover');
    }

    /**
     * click on element if visible
     * @param element
     */
    public clickOnElementIfVisible(element: Chainable<JQuery>): void {
        element.if('visible')
            .click()
            .else()
            .then(() => {(assert.isNotOk(true, 'Element is visible'))});
    }

    /**
     * double click on element
     * @param element
     */
    public doubleClick(element: Chainable<JQuery>): Chainable<JQuery> {
        return element.dblclick();
    }

    /**
     * type to element with value
     * @param element
     * @param value
     */
    public typeToElement(element: Chainable<JQuery>, value: string): void {
        element.type(value);
    }

    /**
     * scroll to element
     * @param element
     */
    public scrollToElement(element: Chainable<JQuery>): Chainable<JQuery> {
        return element.scrollIntoView();
    }

    /**
     * wait for alias
     * @param alias
     * @param timeout
     */
    public waitForAlias(alias: string, timeout: number = 10000): void {
        cy.wait(alias, { timeout: timeout });
    }

    /**
     * wait for timeout in seconds
     * @param seconds
     */
    public waitForTimeout(seconds: number) : void {
        cy.wait(seconds * 1000);
    }

    /**
     * clear cookie
     * @param cookieName
     */
    public clearCookie(cookieName: string): void {
        cy.clearCookie(cookieName);
    }

    /**
     * clear all cookies
     */
    public clearAllCookies(): void {
        cy.clearCookies();
    }

    /**
     * clear local storage
     */
    public clearLocalStorage(): void {
        cy.clearLocalStorage();
    }

    /**
     * clear key from storage
     * @param key
     */
    public cleanKeyFromLocalStorage(key: string) {
        cy.clearLocalStorage(key);
    }

    /**
     * select file
     * @param element
     * @param filePath
     */
    public selectFile(element: Chainable<JQuery>, filePath: string): Chainable<JQuery> {
        return element.selectFile(filePath);
    }

    public getRandomIndex(length: number): number {
        return Math.floor(Math.random() * length);
    }


}