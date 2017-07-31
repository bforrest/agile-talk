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

    describe("given an array of integers", function() {
        var testInts;

        beforeEach(function() {
            testInts = [1, 3, 5, 7, 9];
        })

        it("matches 3 with 'Fizz'", function() {
            var result = fizz.ParseArray(testInts);
            expect(result).toMatch(/Fizz/);
        })

        it("returns 'Fizz' for all numbers divisible by 3", function() {
            var result = fizz.ParseArray(testInts);
            expect(result).toEqual([1, 'Fizz', 5, 7, 'Fizz']);
        })
    })
});