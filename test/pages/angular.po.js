'use strict'

var angularHomePage = function () {
    var angularHomePage = {};

    angularHomePage.name = element(by.model("yourName"));

    angularHomePage.information = element(by.binding("yourName"));

    angularHomePage.displayName = element(by.css("div.well.ng-scope > div > h1"));

    angularHomePage.inputName = function(value){
        angularHomePage.name.sendKeys(value);
    }

    return angularHomePage;
};

module.exports = angularHomePage;
