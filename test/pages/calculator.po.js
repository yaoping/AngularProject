'use strict'

var calculatorPage = function () {
    var calculatorPage = {};

    calculatorPage.firstParameter = element(by.model("first"));

    calculatorPage.secondParameter = element(by.model("second"));

    calculatorPage.operator = element(by.model("operator"));

    calculatorPage.doCalculate = element(by.css("button#gobutton"));

    calculatorPage.result = element(by.css("h2.ng-binding"));

    var historys = element.all(by.repeater("result in memory"));

    calculatorPage.historyResult = historys.first().element(by.css("td:nth-child(3)"));


    return calculatorPage;
};

module.exports = calculatorPage;