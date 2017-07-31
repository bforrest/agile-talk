describe("Fizz", function() {
    var fizz;

    beforeEach(function() {
        fizz = new FizzParser();
    });

    it('should be trure', function() {
        expect(1).toEqual(1);
    })
    it("should print 'Fizz' when the number is three (3)", function() {
        var result = fizz.Parse(3);
        expect(result).toEqual('Fizz');
    })

});