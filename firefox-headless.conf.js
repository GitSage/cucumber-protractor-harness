exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  getPageTimeout: 60000,
  allScriptsTimeout: 500000,
  framework: 'custom',
  resultJsonOutputFile: 'report.json',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
	  browserName: 'firefox',
	  firefoxOptions: {
		  args: ['--headless']
	  },
	  'moz:firefoxOptions': {
		  args: [ '--headless' ]
	  }
  },

  // Spec patterns are relative to this directory.
  specs: [
    'features/*.feature'
  ],

  baseURL: 'http://localhost:8080/',

  cucumberOpts: {
    require: 'features/step_definitions/*.js',
    tags: false,
    format: 'node_modules/cucumber-pretty',
    profile: false,
    'no-source': true
  }
};
