import { BasePage } from "./base-page";

export class CartPage extends BasePage{

    getCheckoutBtn() {
        return cy.get('button[data-test="checkout"]');
    }

}

