'use strict'

var angularHomePage = require('../pages/angular.po.js')();

var angularHomeHandler = function () {

    var angularHomeHandler = {};
    angularHomeHandler.welcomeInformation;
    angularHomeHandler.enterName = function (value) {
        angularHomePage.inputName(value);
    }

    return angularHomeHandler;

};

module.exports = angularHomeHandler;
