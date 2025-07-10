// wdio.conf.js
const path = require('path');

exports.config = {
  runner: 'local',
  specs: ['./tests/**/*.test.js'],
  framework: 'mocha',
  reporters: [
    'spec',
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: false,
    }]
  ],
  maxInstances: 1,
  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'emulator-5554',
    'appium:automationName': 'UiAutomator2',
    'appium:app': path.resolve('./app/SauceLabs.apk'),
    'appium:autoGrantPermissions': true,
    'appium:appWaitActivity': 'com.swaglabsmobileapp.*',
  }],
  services: ['appium'],
  mochaOpts: {
    timeout: 60000,
  }
}
