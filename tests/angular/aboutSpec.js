describe('About Page', function() {
    var ptor = protractor.getInstance();

    beforeEach(function() {
        ptor.get('/about');
    });

    it("should be on the homepage", function() {
        expect(ptor.getCurrentUrl()).toContain('/about');
    });

    it("should have the correct header", function() {
        var headerText = ptor.findElement(protractor.By.id('header')).getText();
        expect(headerText).toEqual('About');
    });
});