import { LoginPage } from "../page-objects/login";
import { HomePage } from "../page-objects/home-page";
import { CartPage } from "../page-objects/cart-page";
import { CheckoutStepOne } from "../page-objects/checkout-step-one-page";
import { CheckoutStepTwo } from "../page-objects/checkout-step-two-page";
import { CheckoutComplete } from "../page-objects/checkout-complete";

import '../support/commands/login'

describe('Login using TypeScript', () => {

    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const cartPage = new CartPage();
    const checkoutStepOnePage = new CheckoutStepOne();
    const checkoutStepTwoPage = new CheckoutStepTwo();
    const checkoutComplete = new CheckoutComplete();
    let users;

    beforeEach(() => {
        cy.fixture('users.json').then( data => {
            users = data;
        });
    })
  
    it('User can login as standar user', () => {
        
        loginPage.navigate();
        cy.login(users.standardUser , Cypress.env('user_password'));
        
        homePage.getBurgerMenu().should('be.visible');
    
    })

    it.only('User can perform a checkout of a Backpack and a Bike Light', () => {
    
        loginPage.navigate();
        cy.login(users.standardUser , Cypress.env('user_password'));      
        cy.location('pathname').should('match', /\/inventory.html$/);
        
        homePage.getAddToCartSauceLabsBackpackBtn().click();
        homePage.getAddToCartSauceLabsBikeLightBtn().click();
        homePage.getCart().click();
        cy.location('pathname').should('match', /\/cart.html$/);

        cartPage.getCheckoutBtn().click();
        cy.location('pathname').should('match', /\/checkout-step-one.html$/);

        checkoutStepOnePage.getFirstName().type("first name");
        checkoutStepOnePage.getLastName().type("last name");
        checkoutStepOnePage.getPostalCode().type("postal");
        checkoutStepOnePage.getContinueBtn().click();
        cy.location('pathname').should('match', /\/checkout-step-two.html$/);

        checkoutStepTwoPage.getFinishBtn().click();
        checkoutComplete.getBackHomeBtn().should('be.visible');
    
    })

})
 