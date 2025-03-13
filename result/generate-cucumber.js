const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: './result/cucumber_report.json',
  output: './result/cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: true
};

reporter.generate(options);