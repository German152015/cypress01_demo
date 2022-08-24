const { defineConfig } = require("cypress");

/// <reference types="Cypress" />

module.exports = defineConfig({
  defaultCommandTimeout:30000,
 
  e2e: {
    setupNodeEvents(on, config) {

    //  const file = config.env.configFile
    //  return getConfigurationByFile(file)
  
    
  }//setupnode
} //fin e2e
}) //fin module.export
      