import { BasePage } from "./base-page";

export class CheckoutStepTwo extends BasePage{

    getFinishBtn() {
        return cy.get('button[data-test="finish"]');
    }

}

