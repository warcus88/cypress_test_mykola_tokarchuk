const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://jsonplaceholder.typicode.com/todos/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
