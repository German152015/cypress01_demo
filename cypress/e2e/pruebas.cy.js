///<reference types = "Cypress"/>


describe('cursito cypress', () => {
  
  it('login exitoso web servicios financieros', () => {
    cy.CMD_Login('120004107','1234')
    cy.screenshot('evidencia login')
    cy.CMD_Logout();
   })
    

  
  });//fin describe



















 
