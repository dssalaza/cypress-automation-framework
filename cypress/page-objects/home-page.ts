import { BasePage } from "./base-page";

export class HomePage extends BasePage{

    getProductSortAtoZ() {
        return cy.get('select[data-test="product_sort_container"]').select('az');
    }

    getProductSortZtoA() {
        return cy.get('select[data-test="product_sort_container"]').select('za');
    }

    getProductSortLoToHi() {
        return cy.get('select[data-test="product_sort_container"]').select('lohi');
    }

    getProductSortHiToLo() {
        return cy.get('select[data-test="product_sort_container"]').select('hilo');
    }

    getAddToCartSauceLabsBackpackBtn() {
        return cy.get('button[data-test="add-to-cart-sauce-labs-backpack"]');
    }
    
    getAddToCartSauceLabsBikeLightBtn() {
        return cy.get('button[data-test="add-to-cart-sauce-labs-bike-light"]');
    }
}
