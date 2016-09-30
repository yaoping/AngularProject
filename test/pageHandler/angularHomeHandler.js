'use strict'

var angularHomePage = require('../pages/angular.po.js')();

var angularHomeHandler = function () {

    var angularHomeHandler = {};

    angularHomeHandler.enterName = function (value) {
        angularHomePage.inputName(value);
    };

    angularHomeHandler.addToDoList = function (value) {
        angularHomePage.inputToDoList(value);
        angularHomePage.clickAddListButton();
    };

    angularHomeHandler.showLastAddedListInformation = function () {
        return angularHomePage.existToDoLists.get(2).getText();
    };

    angularHomeHandler.getDoneListInformation = function () {
        return angularHomePage.DoneLists.get(0).getText();
    }

    return angularHomeHandler;

};

module.exports = angularHomeHandler;
