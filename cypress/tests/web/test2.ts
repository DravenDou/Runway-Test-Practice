import asd from "../../abc/asd"


before(() => {
    asd.prototype.logM();
})

it("Open duckduckgo.com web", () => {
    cy.visit("www.duckduckgo.com");
    cy.task('log', 'After excuting visit')

})