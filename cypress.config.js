const { defineConfig } = require("cypress");

/// <reference types="Cypress" />
const debug = require("debug");
const gmail_tester = require("../udemy_cypress/node_modules/gmail-tester");
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)
  return fs.readJson(pathToConfigFile)
}


module.exports = defineConfig({
  defaultCommandTimeout:30000,
 
  e2e: {
    setupNodeEvents(on, config) {

    //  const file = config.env.configFile
    //  return getConfigurationByFile(file)
  
    
  }//setupnode
} //fin e2e
}) //fin module.export
      