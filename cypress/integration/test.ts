import '../support/commands/login'

describe('Login using TypeScript', () => {

    let users;

    beforeEach(() => {
        cy.fixture('users.json').then( data => {
            users = data;
        });
        cy.visit(Cypress.env('prod_url'));
    })
  
    it('Login', () => {
        cy.login(users.standardUser , Cypress.env('user_password'));
    })
})
 