
declare namespace Cypress {
    interface Chainable<Subject> {

        /**
         * Creates one Todo using UI
         * @example
         * cy.createTodo('new item')
         */
        visitG(url: string): Chainable<any>

        readXlsx(filePath: string): any
    }
}
