describe('Home Page', function() {
    beforeEach(function() {
        browser.get('/');
    });

    it("should have the correct header", function() {
        var header = element(by.id('header'));
        expect(header.getText()).toBe('Home');
    });

    it("should pull correct name from API", function() {
        var name = element(by.binding('{{name}}'));
        expect(name.getText()).toContain('Node.DC');
    });
});