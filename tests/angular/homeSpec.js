describe('Home Page', function() {
	var ptor = protractor.getInstance();

    beforeEach(function() {
        ptor.get('/');
    });

    it("should be on the homepage", function() {
        expect(ptor.getCurrentUrl()).toContain('/');
    });

    it("should have the correct header", function() {
        var headerText = ptor.findElement(protractor.By.id('header')).getText();
        expect(headerText).toEqual('Home');
    });

    it("should have a working About page link", function() {
        var aboutLink = ptor.findElement(protractor.By.linkText('About'));
        aboutLink.click();
        expect(ptor.getCurrentUrl()).toContain('/about');
    });

    it("should have a working Contact page link", function() {
        var contactLink = ptor.findElement(protractor.By.linkText('Contact'));
        contactLink.click();
        expect(ptor.getCurrentUrl()).toContain('/contact');
    });

    it("should pull correct name from API", function() {
        var name = ptor.findElement(protractor.By.binding('{{name}}'));
        expect(name.getText()).toContain('Node.DC');
    });
});
