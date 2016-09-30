'use strict'

var angularHomePage = function () {
    var angularHomePage = {};

    angularHomePage.name = element(by.model("yourName"));

    angularHomePage.information = element(by.binding("yourName"));

    angularHomePage.displayName = element(by.css("div.well.ng-scope > div > h1"));

    angularHomePage.inputName = function (value) {
        angularHomePage.name.sendKeys(value);
    };

    angularHomePage.toDoList = element(by.model("todoList.todoText"));

    angularHomePage.inputToDoList = function (value) {
        angularHomePage.toDoList.sendKeys(value);
    };

    angularHomePage.addButton = element(by.css("input.btn-primary"));

    angularHomePage.clickAddListButton = function () {
        angularHomePage.addButton.click();
    };

    angularHomePage.existToDoLists = element.all(by.repeater("todo in todoList.todos"));


    angularHomePage.clickDoneCheckbox = function () {
        angularHomePage.existToDoLists.get(2).element(by.css('input')).click();
    };

    angularHomePage.DoneLists = element.all(by.css(".done-true"));

    return angularHomePage;
};

module.exports = angularHomePage;
