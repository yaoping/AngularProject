
var endpoint = require('./endpoint.json');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var JasmineSpecReporter = require('jasmine-spec-reporter');

exports.config = {
    restartBrowserBetweenTest: true,
    specs: ['../spec/calculator.spec.js'],
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['igcognito', 'start-maximized', '--window-size=1690,1200']
        }
    },
    baseUrl: endpoint[process.env.npm_config_endpoint || 'calculator'],
    onPrepare: function () {
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: '../reports/',
                screenshotsFolder: '../images',
                takeScreenshots: false,
                takeScreenshotsOnlyOnFailures: false
            })
        );

        // add jasmine spec reporter
        jasmine.getEnv().addReporter(new JasmineSpecReporter({displayStacktrace: 'all'}));
    },
    allScriptsTimeout: 300000,

    jasmineNodeOpts: {
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        print: function () {
        },
        defaultTimeoutInterval: 500000
    }

}
