// playwright.config.js

const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({

  testDir: './tests',

  timeout: 60000,

  retries: 1,

  reporter: [
    ['html', { open: 'always' }],
    ['list']
  ],

  use: {

    headless: false,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure',

    viewport: {
      width: 1366,
      height: 768
    }

  },

  projects: [

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // }

  ]

});