'use strict'

var calculatorPage = function () {
    var calculatorPage = {};

    calculatorPage.firstParameter = element(by.model("first"));

    calculatorPage.secondParameter = element(by.model("second"));

    calculatorPage.operator = element(by.model("operator"));

    calculatorPage.doCalculate = element(by.css("button#gobutton"));

    calculatorPage.result = element(by.css("h2.ng-binding"));

    return calculatorPage;
};

module.exports = calculatorPage;