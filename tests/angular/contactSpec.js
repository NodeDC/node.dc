describe('Conact Page', function() {
    beforeEach(function() {
        browser.get('/contact');
    });

    it("should have the correct header", function() {
        var header = element(by.id('header'));
        expect(header.getText()).toBe('Contact');
    });
});