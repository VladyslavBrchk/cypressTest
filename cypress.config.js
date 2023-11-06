const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ag26qs',
  e2e: {
    baseUrl: 'https://demo.realworld.io/#/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
