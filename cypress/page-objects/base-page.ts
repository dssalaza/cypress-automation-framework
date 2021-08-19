export class BasePage{

    getBurgerMenu() {
        return cy.get('[id="react-burger-menu-btn"]');
    }

    getCart() {
        return cy.get('div[id="shopping_cart_container"]');
    }
    
}
