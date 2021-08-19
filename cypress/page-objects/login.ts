export class LoginPage{
 
    getUserName() {
        return cy.get('[data-test="username"]');
    }

    getPassword() {
        return cy.get('[data-test="password"]');
    }

    getLoginBtn() {
        return cy.get('[data-test="login-button"]');
    }

    navigate() {
        cy.visit(Cypress.env('prod_url'));
    }
}