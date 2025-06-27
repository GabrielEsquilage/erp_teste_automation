const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Aqui você pode configurar plugins, se necessário
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});