'use strict'

var calculatorPage = require('../pages/calculator.po.js')();

var calculatorHomeHandler = function () {
    var calculatorHomeHandler = {};

    calculatorHomeHandler.addition = function (value1, value2) {
        calculatorPage.firstParameter.sendKeys(value1);
        calculatorPage.secondParameter.sendKeys(value2);
        calculatorPage.doCalculate.click();
    };

    calculatorHomeHandler.subtractrion = function (value1, value2) {
        calculatorPage.firstParameter.sendKeys(value1);
        calculatorPage.operator.$('[value ="SUBTRACTION"]').click();
        calculatorPage.secondParameter.sendKeys(value2);
        calculatorPage.doCalculate.click();
    };

    calculatorHomeHandler.operation = function (value1, operator, value2) {
        calculatorPage.firstParameter.sendKeys(value1);
        calculatorPage.operator.$('[value ="' + operator + '"]').click();
        calculatorPage.secondParameter.sendKeys(value2);
        calculatorPage.doCalculate.click();
    }


    return calculatorHomeHandler;
};

module.exports = calculatorHomeHandler;
