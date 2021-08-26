import { BasePage } from "./base-page";

export class CheckoutStepOne extends BasePage{

    getFirstName() {
        return cy.get('input[data-test="firstName"]');
    }

    getLastName() {
        return cy.get('input[data-test="lastName"]');
    }

    getPostalCode() {
        return cy.get('input[data-test="postalCode"]');
    }

    getContinueBtn() {
        return cy.get('input[data-test="continue"]');
    }
}

