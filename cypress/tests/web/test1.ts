import Sdf from "../../abc/sdf";
import ErrorHandler from "../../errorHandler/ErrorHandler";
//import {beforeEach} from "mocha";

beforeEach(() => {
    ErrorHandler.prototype.handleErrors();
})

it ("open testlio.com", () => {
    cy.visit('www.testlio.com');
    let sdf = new Sdf();
    sdf.routes()
    sdf.aboutUsIntercepted();
})