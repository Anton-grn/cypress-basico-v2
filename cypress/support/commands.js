// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Antonio')
    cy.get('#lastName').type('Ramos')
    cy.get('#email').type('antonio@antonio.com')
    cy.get('#open-text-area').type('Estou aprendendo!', {delay:0})
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible') 
})