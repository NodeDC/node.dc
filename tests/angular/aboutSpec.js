describe('About Page', function() {
    beforeEach(function() {
        browser.get('/about');
    });

    it("should have the correct header", function() {
        var header = element(by.id('header'));
        expect(header.getText()).toBe('About');
    });
});