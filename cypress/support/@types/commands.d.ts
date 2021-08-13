declare namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.login('username','password')
       */
      login(email: string, password: string): void;
    }
  }
