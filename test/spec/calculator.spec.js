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

    it('should add two parameters', function () {
        calculatorHomeHandler.addition(5, 3);

        expect(calculatorPage.result.getText()).toEqual("8");
    });

    it('should subtractrion two parameters', function () {
        calculatorHomeHandler.subtractrion(19, 3);

        expect(calculatorPage.result.getText()).toEqual("16");
    });

    it('should do operation based on the different parameters', function () {
        calculatorHomeHandler.operation(18, "DIVISION", 3);

        expect(calculatorPage.result.getText()).toEqual("6");

        calculatorHomeHandler.operation(6, "MULTIPLICATION", 3);

        expect(calculatorPage.result.getText()).toEqual("18");
    });


})
