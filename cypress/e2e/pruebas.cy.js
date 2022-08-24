///<reference types = "Cypress"/>


describe('cursito cypress', () => {

  beforeEach(function () {
      
        

    /****************************************************
    *   Seleccionar ambiente de pruebas                 * 
    *                                                   *
    *  Opción 0 = Ambiente QA                           *
    *  Opción 1 = Ambiente PROD                         *
    *  Opción 2 = Ambiente DEV                          *                   
    *                                                   *
    * **************************************************/

  //  cy.CMD_configuraBeforeTest()
    cy.CMD_Obtener_URL(0)
    cy.CMD_navegador_check()
    


    /****************************************************
    *   Seleccionar resolucion web o movile             * 
    *                                                   *
    *  Opción 0 = Resolución movile samsung-s10         *
    *  Opción 1 = Resolución movile iphone-7            *
    *  Opción 2 = Resolución web 1349x768               *                   
    *                                                   *
    * **************************************************/

    cy.CMD_Resolucion(2)

});

  //prueba cypress en github
  it('login exitoso web servicios financieros', () => {
    cy.CMD_Login('120004107','1234')
    cy.screenshot('evidencia login')
    cy.CMD_Logout();
   })
    

  
  });//fin describe



















 
