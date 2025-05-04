import ErrorHandler from "../errorHandler/ErrorHandler";
import TestlioGlobalPage from "../Pages/TestlioGlobalPage"
import TestlioProjectPage from "../Pages/TestlioProjectPage";
let testlioGlobalPage: TestlioGlobalPage = new TestlioGlobalPage();
let testlioProjectPage: TestlioProjectPage;
beforeEach(() => {
    ErrorHandler.prototype.handleErrors();
    testlioGlobalPage.routes();
})

it("Visit google 2nd time", () => {
    cy.visit('www.testlio.com')
    //testlioGlobalPage.clickAboutLink();
    testlioProjectPage = testlioGlobalPage.signIn();
    testlioProjectPage.selectDropdown('Testlio Demo');
    cy.wait(20000);
})