describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('UK - Login', () => {
    it('should redirect to the signin page', () => {
      cy.get('[data-cy="heading"]').should('have.text', 'Login');
      cy.get('[data-cy="username-label"]').should('contain', 'Username');
      cy.get('[data-cy="username"]').should('have.attr', 'type', 'text');
      cy.get('[data-cy="password-label"]').should('contain', 'Password');
      cy.get('[data-cy="password"]').should('have.attr', 'type', 'password');
      cy.get('[data-cy="forgot-password"]').should('exist').and('have.text', 'Forgot Password');
      cy.get('[data-cy="submit"]').should('have.text', 'Submit').and('have.attr', 'type', 'submit');
      cy.get('[data-cy="create-account-label"]')
        .should('exist')
        .and('have.text', "Don't Have an Account?");
      cy.get('[data-cy="create-account"]').should('exist').and('have.text', 'Create an Account');
    });
  });
});
