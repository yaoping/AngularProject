var calculatorPage = require('../pages/calculator.po.js')();
var calculatorHomeHandler = require('../pageHandler/calculatorHomeHandler.js')();

describe('test the simple calculator ', function () {

    beforeEach(function () {
        browser.get(browser.baseUrl);
        browser.waitForAngular();
    });

    afterEach(function () {
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
    });

    it('should have a title', function () {
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

})
