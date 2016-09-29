var angularHomePage = require('../pages/angular.po.js')();
var angularHomeHandler = require('../pageHandler/angularHomeHandler.js')();


describe('interacting with the angualr page', function () {
    beforeEach(function () {
        //browser.get(browser.baseUrl);
        browser.get('https://angularjs.org');
        browser.waitForAngular();
    });


    it('show welcome information base on the entered Name', function () {
        angularHomeHandler.enterName("Pingping");
        expect(angularHomePage.displayName.getText()).toEqual("Hello Pingping!");
    })

});
