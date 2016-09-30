var angularHomePage = require('../pages/angular.po.js')();
var angularHomeHandler = require('../pageHandler/angularHomeHandler.js')();


describe('interacting with the angualr page', function () {
    beforeEach(function () {
        browser.get(browser.baseUrl);
        browser.waitForAngular();
    });

    afterEach(function () {
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
    });


    it('show welcome information base on the entered Name', function () {
        angularHomeHandler.enterName("Pingping");
        expect(angularHomePage.displayName.getText()).toEqual("Hello Pingping!");
    });

    it('should add a todo list success', function () {
        angularHomeHandler.addToDoList("learn protractor class");
        expect(angularHomeHandler.showLastAddedListInformation()).toEqual("learn protractor class");

    });

    it("the done list's length should be growth when finished it", function () {
        expect(angularHomeHandler.getDoneListInformation()).toEqual("learn angular");
    })

});
