//var endpoint = require('endpoint.json');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var JasmineSpecReporter = require('jasmine-spec-reporter');

exports.config = {

    restartBrowserBetweenTest: true,
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../spec/angular.spec.js'],
    //baseUrl: endpoint[process.env.npm_config_endpoint || 'angular-home'],
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['incognito', 'start-maximized', '--window-size=1690,1200']
        }
    },

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
