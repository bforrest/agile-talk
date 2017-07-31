function FizzParser() {}

FizzParser.prototype.Parse = function(value) {
    if (value === 3)
        return 'Fizz';
    return value;
}

FizzParser.prototype.ParseArray = function(input) {
    var out = [];
    for (var s in input) {
        out.push(this.Parse(input[s]))
    }
    return out;
}