///<reference types = "Cypress"/>


describe('cursito cypress', () => {
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })








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
    it('asert contain', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.title('My Store')
        cy.log("probando")

        cy.get('#block_top_menu').should('be.visible').contains('Dresses').click({ force: true })
    })

    //find busca el elemento por el selector ingresado en este caso es por atributo
    //eq busca el objeto igual en la posicion ingresada en este caso 0
    it('asert find , eq', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.title('My Store')
        cy.log("probando")
        cy.get('.product-container').find('[src="http://automationpractice.com/img/p/1/1-home_default.jpg"]')
            .eq(0).click()
    })


    //la funcion then permite capturar la propiedad texto de cualquier elemento
    it('asert text', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.title('My Store')
        cy.log("probando")
        cy.get('.product-container').find(".product-image-container").should('be.visible').eq(3).click()
        cy.xpath('//span[contains(text(),"New")]').then((e) => {


            //podemos validar el contenido de e.text()
            //con throw new Error forzamos a que falle el test si no se cumple la condicion 

            if (e.text() == 'New') {
                cy.log("El valor del elemento es : " + e.text())
            } else {
                throw new Error("El valor es distrinto el test ha fallado")
            }
        })

    })

    it('assert por class', () => {
        cy.visit('https://privqa.abcserviciosfinancieros.cl/')
        cy.wait(15000)
        cy.xpath('//input[@name="_contents1_S002_500" or @id="iptRut"]').should('be.visible').should('be.enabled').type('120004107')
        cy.get('input#iptPassiptPassHide[type="password"]').should('be.visible').should('be.enabled').type('1234')
        cy.get('input#iptPassiptPassHide[type="password"]').should('contain.value', "1234")
        cy.wait(3000)

        //buscamos que el elemento contenga la class seleccionada ejem VTButtonComponent
        //luego con la promesa si se cumple continua el resto del código 
        cy.get('#btnNextOn').should('have.class', 'VTButtonComponent').then(() => {
            cy.get('#btnNextOn').click()
            cy.get('span#txtTitulo').should('contain.text', 'Promociones exclusivas para ti')
            cy.get('#ImgCerrar').should('be.visible').click()

        })
    })


    it('funcion and', () => {
        cy.visit('https://privqa.abcserviciosfinancieros.cl/')
        cy.wait(15000)
        //la funcion and obliga a que se cumplan todas las condiciones para pasar a la siguiente linea o funcion, etc
        cy.xpath('//input[@name="_contents1_S002_500" or @id="iptRut"]').and('be.visible').and('be.enabled').type('120004107')
        cy.get('input#iptPassiptPassHide[type="password"]').and('be.visible').and('be.enabled').type('1234', { force: true })
        cy.get('input#iptPassiptPassHide[type="password"]').should('contain.value', "1234")
        cy.wait(3000)
        cy.get('#btnNextOn').should('have.class', 'VTButtonComponent').then(() => {
            cy.get('#btnNextOn').click()
            cy.get('span#txtTitulo').should('contain.text', 'Promociones exclusivas para ti')
            cy.get('#ImgCerrar').should('be.visible').click()

        })
    })


    it('busqueda por funcion contain', () => {
        cy.visit('https://privqa.abcserviciosfinancieros.cl/')
        cy.wait(15000)
        //la funcion and obliga a que se cumplan todas las condiciones para pasar a la siguiente linea o funcion, etc
        cy.xpath('//input[@name="_contents1_S002_500" or @id="iptRut"]').and('be.visible').and('be.enabled').type('120004107')
        cy.get('input#iptPassiptPassHide[type="password"]').and('be.visible').and('be.enabled').type('1234', { force: true })
        cy.get('input#iptPassiptPassHide[type="password"]').should('contain.value', "1234")
        cy.wait(3000)

        //se busca el elemento que contenga el texto ingresar, en este caso el boton

        cy.contains("Ingresar").click()

    })



    it('funcion invoke', () => {
        cy.visit('https://privqa.abcserviciosfinancieros.cl/')
        cy.wait(15000)

        //funcion invoke toma un atributo del elemento 

        cy.get('#iptRut').invoke("attr", "placeholder").should('contain', '1.111.111-1')
        cy.get('#iptRut').type('120004107')
        cy.get('input#iptPassiptPassHide[type="password"]').and('be.visible').and('be.enabled').type('1234', { force: true })
        cy.get('input#iptPassiptPassHide[type="password"]').should('contain.value', "1234")
        cy.wait(3000)

        //se busca el elemento que contenga el texto ingresar, en este caso el boton

        cy.contains("Ingresar").click()

    })


    it('propiedades window', () => {
        cy.visit('https://privqa.abcserviciosfinancieros.cl/')
        cy.title().should('eq', 'Presentation')
        cy.document().should('have.property', "charset")
        cy.document().should('eq', "UTF-8")


    })


    it('mouse over', () => {
        cy.viewport(1349, 768)
        cy.visit('https://www.pragma.com.co/es')

        cy.contains('SOBRE PRAGMA').trigger('mouseover')


    })

    //id-client : 548615345038-dao5lcefjqfns6i8ks8caprcceppog2o.apps.googleusercontent.com

    //secret-client :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

    //https://console.cloud.google.com/apis/credentials?project=claveotc&supportedpurview=project   descargar credenciales

    it("Register Form: Email is delievered", function () {
        cy.visit("http://localhost");
        const test_id = new Date().getTime();
        const incoming_mailbox = `test+${test_id}@gmail.com`;
        const password = uuidv1().split("-")[0];

        cy.get("#firstname").type(`Automation Test #${test_id}`); // Type 'Automation Test #(random-number) as the first name
        cy.get("#lastname").type("QA Test");                      // Type 'QA Test' as the last name
        cy.get("#email").type(incoming_mailbox);                  // Type the randomly generated email.
        cy.get("#password").type(password);                       // Type the randomly generated password.
        cy.get("#repeat_password").type(password);                // ... Twice ;)
        cy.get("button[type='submit']").click();                  // Click the 'submit' buttton.
        cy                                                        // Make the 🧙‍ happen!
            .task("gmail:check", {
                from: "no-reply@domain.com",
                to: incoming_mailbox,
                subject: "Confirm your account"
            })
            .then(email => {
                assert.isNotNull(email, `Email was not found`);
            });
    });



    //obtener correo

    it("generar token gmail", function () {
        //0.1.- generar el caso que usara clave dinamica olvido clave, avance, mantenedor cuenta 
        //0.2.- obtener el access_token de la api gmail   OK
        //1.- obtener el ID del correo https://gmail.googleapis.com/gmail/v1/users/{{gmail}}/messages  OK
        //2.- obtener el correo https://gmail.googleapis.com/gmail/v1/users/{{gmail}}/messages/{{idcorreo}} OK
        //3.- desde el correo rescatar la clave dinamica  OK
        //5.- pasarle la clave dinamica al campo requerido OK
        //






      /********************************************************************
       *          Generar el accesstoken de la api gmail                   *
       * ******************************************************************/
        let id 
        let correo
        let accesstoken
        let email = 'qadevabc2022@gmail.com'
        let otc
       // let id
        let token ='ya29.A0AVA9y1sEOfTgTEdiPKNYQH1cU8ya5OACbXUOr5Hs5QeWbL83kh3nbWFpT1mUGAEjTucDH5leshHJZyDBdxFDfxJPD0kFO5CyzPNkwuWO5sG03JBP6_okJaH2rpmrToSfk7XOPH7FNfVkl6nxv-5CFUOJBnK0QAaCgYKATASATASFQE65dr8e24IiyoLGGTi7XVgehtzRw0165'
        cy.request({

            method: 'POST',
            url: 'https://accounts.google.com/o/oauth2/token',
            body: {
                "grant_type": 'refresh_token',
                "client_id": '164732834550-m951bbs4hs6v4r2acmfd97quf1ukro77.apps.googleusercontent.com',
                "client_secret": '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',
                "refresh_token": '1//0hbiM0eZj3oz7CgYIARAAGBESNwF-L9IrUV45kh1JwJySH5rr2mNyfcpjY7OePaRSD68Wt_ejePdIKNoZghYMsntWVEyVEnBoIP8'
            },
        }).then(response => {
            cy.log(JSON.stringify(response))
            cy.log(response.body.access_token)
            expect(response).property('status').to.equal(200)
            accesstoken = response.body.access_token
        
       /********************************************************************
       *          Obtener el ID del correo con la clave dinamica           *
       * ******************************************************************/
         
                  
        cy.request({
            method: 'GET',
            url: 'https://gmail.googleapis.com/gmail/v1/users/' + email + '/messages',
            headers: {
                'Authorization' :"Bearer " +token
            }
          
        }).then(response => {
            cy.log(JSON.stringify(response))
            id = response.body.messages[0].id          //extraer el ID del correo
            cy.log("El id del correo es : " + id)
            expect(response).property('status').to.equal(200)

         //EVALUAR SI VIEND VACIO EL ID ES QUE NO HA LLEGADO EL CORREO CON LA CLAVE Y EL CASO DE DEBE FALLAR
           
            cy.log("el id es : " + id)  //1829cf802e504de2

            /********************************************************************
            *          Obtener  correo con la clave dinamica y clave            *
            * ******************************************************************/
     
              
             cy.request({
                 method: 'GET',
                 url: 'https://gmail.googleapis.com/gmail/v1/users/'+email+'/messages/'+id,
                 headers: {
                     'Authorization' :"Bearer " +token
                 }
               
             }).then(response => {
                 cy.log(JSON.stringify(response))
                 correo = response.body.snippet  //extraer el correo trae : abcvisa Hola AROCARO N, La Clave Dinámica de seguridad para autorizar su transacción es: 181358 abcvisa Consejos para evitar fraudes: abcvisa No entregues tu clave a nadie. Renueva tu clave
                 otc =  correo.substring(89,95)
                 cy.log("ls OTC es : " + otc)
                 expect(response).property('status').to.equal(200)
             });

            /********************************************************************
            *          eliminar correo con la clave dinamica y clave            *
            * ******************************************************************/
          /* 
             cy.request({
                method: 'POST',
                url: 'https://gmail.googleapis.com/gmail/v1/users/'+email+'/messages/'+id+'/trash',
            
            
                headers: {
                    'Authorization' :"Bearer " +token
                }
              
            }).then(response => {
                cy.log(JSON.stringify(response))
                cy.log("respuesta : " + response)
                expect(response).property('status').to.equal(200)
            });

        */  
            
        });
     
       })  //then principal -- promesa

}) //fin it api


it('iframeeee',()=>{
    cy.visit('https://demoqa.com/frames')
    
    cy.get('#frame1').then(function($iframe){
    
        const iframe = $iframe.contents().find('body')
           cy.wrap(iframe).should('be.visible')

        const texto =  $iframe.contents().find('#sampleHeading')
        cy.wrap(texto).should('be.visible').and('have.text',"This is a sample page")

        //resualta y cambia de color gracias a tener acceso al atributo
        cy.wrap(texto).invoke('attr','style',"color:blue;fonr-size:100px" )  

        //oculta
      //  cy.wrap(texto).invoke('hide')  

        //negrita
        cy.wrap(texto).invoke('css','bold')  
      })
    })


    it.only('cambio tab',()=>{
          cy.visit('https://privqa.abcserviciosfinancieros.cl/')
        cy.wait(15000)
        cy.xpath('//input[@name="_contents1_S002_500" or @id="iptRut"]').should('be.visible').should('be.enabled').type('120004107')
        cy.get('input#iptPassiptPassHide[type="password"]').should('be.visible').should('be.enabled').type('1234')
        cy.get('input#iptPassiptPassHide[type="password"]').should('contain.value', "1234")
        cy.wait(3000)
        cy.get('#btnNextOn').should('be.visible').should('be.enabled').should('have.text', 'Ingresar').click()
        
        

      

        cy.get('#ImgAtCliente').invoke('removeAttr','target').click()

        
      })







})//fin describe