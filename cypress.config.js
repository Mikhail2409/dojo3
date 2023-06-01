const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "keyId": "a8f45917-878f-429e-b2b1-d30ba3040821",
  "projectId": "t7xxhi",
  e2e: {
    chromeWebSecurity: false,
    reporter: "cypress-mochawesome-reporter",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});

 

