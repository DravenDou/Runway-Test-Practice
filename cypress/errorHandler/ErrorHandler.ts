export default class ErrorHandler {
    public handleErrors() {
        cy.on('uncaught:exception', (e) => {
            if (e.message.includes('\'MutationObserver\'')) {
                // we expected this error, so let's ignore it
                // and let the test continue
                return false;
            }
        // on any other error message the test fails
            if (e.message.includes('\'length\'')) {
                return false;
            }

            if (e.message.includes('The user aborted a request')) {
                return false;
            }
        })
        
    }
}