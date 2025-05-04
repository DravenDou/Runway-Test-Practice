import testReader from "./cypress/excelReader/TestReader";
const webpackPreprocessor = require('@cypress/webpack-preprocessor');
const _ = require('lodash');

const { defineConfig } = require('cypress');

module.exports =  defineConfig({
  execTimeout: 0,
  /*reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },*/
  e2e: {
    specPattern: './cypress/tests/MasterSuite.ts',
    supportFile: './cypress/support/e2e.js',
    pluginFile: './cypress/plugins/index.js',
    experimentalSessionAndOrigin: true,
    chromeWebSecurity: false,
    pageLoadTimeout: 120000,
    numTestsKeptInMemory: 50,
   // chromeWebSecurity: false,
    video: false,

    async setupNodeEvents (on, config) {
      // `on` is used to hook into various events Cypress emits
      // `config` is the resolved Cypress config

      //const data = testReader.getTestList();
      const options = {
        webpackOptions: require('./webpack.config'),
        watchOptions: {},
      }
      on('file:preprocessor', webpackPreprocessor(options));
      //require('cypress-mochawesome-reporter/plugin')(on);

      config.env.testL = Object.fromEntries(testReader.getTestList()); //_.map(_.pick(testReader.getTestList()));
      //config.env.AppObject = Object.fromEntries(appObjectsReader.readAppObjectsLocators());
      /*for (const [key, value] of config.env.testL) {
        console.log(`Key : ${key} and Value : ${value}`);
      })*/

      console.table(config.env.testL);
      on('task', {
        log(message: any) {
          console.log(message)
          return null
        },
      })
      return config;
    }
  }
})