import '../support/commands/login'
describe('Login using TypeScript', () => {

    let user;

    beforeEach(() => {
        cy.fixture('users.json').then( data => {
            user = data;
        });
        cy.visit(Cypress.env('prod_url'));
    })
  
    it('Login', () => {
        cy.login(user.standardUser , Cypress.env('user_password'));
    })
})
 