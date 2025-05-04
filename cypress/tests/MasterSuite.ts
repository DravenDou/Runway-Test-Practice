/// <reference types="cypress" />
let testL = Cypress.env('testL');
//const red = require.resolve('tests')

function importTest(name, path: string) {
    describe(name, () => {
        require('tests' + path);
    });
}

// @ts-ignore
//declare function require(path: string);
describe('top suite', () => {

    before(() => {
        cy.log(testL[0]);
    });

    const a = new Map(Object.entries(testL));

    for (const [key, value] of a) {
        //console.log(`Key : ${key} and Value : ${value}`);
        importTest(String(key), String(value));
    }

    after(() => {
        //cy.log('after all tests');
    });
});
