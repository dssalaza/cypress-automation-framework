import { LoginPage } from "../page-objects/login";
import { HomePage } from "../page-objects/home-page";

import '../support/commands/login'

describe('Login using TypeScript', () => {

    const loginPage = new LoginPage()
    const homePage = new HomePage()
    let users;

    beforeEach(() => {
        cy.fixture('users.json').then( data => {
            users = data;
        });
    })
  
    it('Login as standar user', () => {
        loginPage.navigate();
        cy.login(users.standardUser , Cypress.env('user_password'));
        
        homePage.getBurgerMenu().should('be.visible');
    })
})
 