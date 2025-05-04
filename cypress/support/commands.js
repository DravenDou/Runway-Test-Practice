Cypress.Commands.add("readXlsx", (filePath) => {
    console.log(filePath);
    return cy.task('readXlsx', { filePath: "Suites.xlsx" })
});

Cypress.Commands.add("visitG", (url) => {
    cy.visit(url);
})



  
  