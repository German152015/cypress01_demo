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

Cypress.Commands.add('CMD_navegador_check', () => {
    cy.log("channel : " + Cypress.browser.channel)
    cy.log("displayName : " + Cypress.browser.displayName)
    cy.log("family : " + Cypress.browser.family)
    cy.log("majorVersion : " + Cypress.browser.majorVersion)
    cy.log("name : " + Cypress.browser.name)
    cy.log("version : " + Cypress.browser.version)
    expect(Cypress.browser.name).not.to.be.empty
})


Cypress.Commands.add('CMD_Resolucion', (opcion) => {

    switch (opcion) {
        case 0:
            cy.log("Resolución movile samsung-s10 " + "Opcion ingresada es : " + opcion)
            cy.viewport('samsung-s10')
            break;

        case 1:
            cy.log("Resolución movile iphone-7  " + "Opcion ingresada es : " + opcion)
            cy.viewport('iphone-7')
            break;

        case 2:
            cy.log("Resolución web 1349x768  " + "Opcion ingresada es : " + opcion)
            cy.viewport(1349, 768)
            break;
    }
})


Cypress.Commands.add('CMD_Obtener_URL',(opcion) => {

    switch (opcion) {
        case 0:
            cy.visit('https://privqa.abcserviciosfinancieros.cl/')
            break;
        case 1:
            cy.visit('')
            break;
        case 2:
            cy.visit('')
            break;
    }
})
