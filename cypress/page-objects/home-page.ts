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

}
