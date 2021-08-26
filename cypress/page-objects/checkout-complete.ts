import { BasePage } from "./base-page";

export class CheckoutComplete extends BasePage{

    getBackHomeBtn() {
        return cy.get('button[data-test="back-to-products"]');
    }

}

