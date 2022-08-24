// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
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

Cypress.Commands.add('CMD_Login', (user, pass) => {
    cy.wait(18000)
    cy.get('#iptRut').should('be.visible').and('be.enabled').type(user,{delay:300})
    cy.get('#iptPassiptPassHide').should('be.visible').and('be.enabled').type(pass,{force:true}) //agregar force
    cy.wait(3000)
    cy.get('#btnNextOn').should('be.visible').and('be.enabled').and('have.text', 'Ingresar').click()
})

Cypress.Commands.add('CMD_Logout', () => {
    cy.get('#ImgCerrar').should('be.visible').click()
})
