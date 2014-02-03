var util = require('util');

describe('Conact Page', function() {
    var ptor = protractor.getInstance();

    beforeEach(function() {
        ptor.get('/contact');
    });

    it("should be on the contact page", function() {
        expect(ptor.getCurrentUrl()).toContain('/contact');
    });

    it("should have the correct header", function() {
        var headerText = ptor.findElement(protractor.By.id('header')).getText();
        expect(headerText).toEqual('Contact');
    });

    it("should have userSubmitted set to false", function(){
        var testSubmission = ptor.findElement(protractor.By.id('testSubmission')).getText();
        expect(testSubmission).toEqual('');
    });

    it("should fill out the form correctly", function() {
        ptor.findElement(protractor.By.model('contactForm.email')).sendKeys('test@test.local');
        ptor.findElement(protractor.By.id('userComment')).sendKeys('This is a test comment.');
        ptor.findElement(protractor.By.css('Button[ng-click^="userSubmit"')).click();
        ptor.waitForAngular();
        var testSubmission = ptor.findElement(protractor.By.id('testSubmission')).getText();
        expect(testSubmission).toNotEqual('');
    });
});