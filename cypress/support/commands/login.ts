const login = (username: string, password: string) =>  {
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
};

Cypress.Commands.add('login', login)
