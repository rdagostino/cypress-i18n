/// <reference types="cypress" />
export {};

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to directly login to the `Professional Portal`
       * @example cy.login()
       */
      login(): void;
    }
  }
}

// TODO: Implement direct login method to simplify tests...
Cypress.Commands.add('login', () => {
  console.log('Logging in');
});
