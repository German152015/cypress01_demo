///<reference types = "Cypress"/>


describe('cursito cypress', () => {
  
  it('assert have text y content.value', () => {
    cy.visit('https://privqa.abcserviciosfinancieros.cl/')
    cy.wait(15000)
    cy.xpath('//input[@name="_contents1_S002_500" or @id="iptRut"]').should('be.visible').should('be.enabled').type('120004107')
    cy.get('input#iptPassiptPassHide[type="password"]').should('be.visible').should('be.enabled').type('1234')
    cy.get('input#iptPassiptPassHide[type="password"]').should('contain.value', "1234")
    cy.wait(3000)
    cy.get('#btnNextOn').should('be.visible').should('be.enabled').should('have.text', 'Ingresar').click()


   

    //*[@id="flcHeaderMenu1"]
    })
    

   

   //cuando se requiera buscar un ele desde un contenedor central con multiples items 
   //en este ejemplo se busca que contenga el texto Dresses
  it('asert contain', () =>{
    cy.visit('http://automationpractice.com/index.php')
    cy.title('My Store')
    cy.log("probando")

    cy.get('#block_top_menu').should('be.visible').contains('Dresses').click({force: true})
  })

  //find busca el elemento por el selector ingresado en este caso es por atributo
  //eq busca el objeto igual en la posicion ingresada en este caso 0
  it('asert find , eq', () =>{
    cy.visit('http://automationpractice.com/index.php')
    cy.title('My Store')
    cy.log("probando")
    cy.get('.product-container').find('[src="http://automationpractice.com/img/p/1/1-home_default.jpg"]')
    .eq(0).click()
  })


  //la funcion then permite capturar la propiedad texto de cualquier elemento
  it('asert text', () =>{
    cy.visit('http://automationpractice.com/index.php')
    cy.title('My Store')
    cy.log("probando")
    cy.get('.product-container').find(".product-image-container").should('be.visible').eq(3).click()
    cy.xpath('//span[contains(text(),"New")]').then((e)=>{
   
           
        //podemos validar el contenido de e.text()
        //con throw new Error forzamos a que falle el test si no se cumple la condicion 
        
        if(e.text() == 'New'){
          cy.log("El valor del elemento es : " + e.text())
        }else{
          throw new Error("El valor es distrinto el test ha fallado")
        }
    })
    
  })
  
  //##DRIVER ORACLE
//driver = oracle.jdbc.driver.OracleDriver
//ora = jdbc:oracle:thin

  //jdbc:oracle:thin:@192.168.76.108:1521:kun [INTELLECTCARDS on INTELLECTCARDS]



  const query = "select * from cdmst";

  it("prueba query1", () => {
   
    cy.task("sqlQuery", query).then((resolvedValue) => {
      
        console.log("result==>" + resolvedValue['CIVIL_ID']);
     
    });
 






   });

   /*
   it("conexion bbdd", () => {
    
      const user = "INTELLECTCARDS"
      const password ="intellectcards"
      const ip ="@192.168.76.108"
      const sid ="kun"
      const port = 1521
      const connectString = "oracle:thin:@192.168.76.108:1521:kun"

      oracledb.initOracleClient({ libDir: "C:/instantclient_21_6"});

          let conn
          conn = await oracledb.getConnection(connectString,user,password)
          result = await conn.execute(query);
       
      cy.task()



   });

   */
 


   beforeEach(function () {
   
    cy.CMD_configuraBeforeTest()
    

   })




   it.only('cambio de ambientes',()=>{
    cy.wait(15000)
    cy.xpath('//input[@name="_contents1_S002_500" or @id="iptRut"]').should('be.visible').should('be.enabled').type('120004107')
    cy.get('input#iptPassiptPassHide[type="password"]').should('be.visible').should('be.enabled').type('1234')
    cy.wait(3000)
    cy.reload()
        


   })

  });//fin describe



















 
