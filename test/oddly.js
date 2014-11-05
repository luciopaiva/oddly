
var
    assert = require('assert'),
    oddly = require('../');

describe('Oddly basic API', function () {

    it('should generate a pseudo random number using uniform distribution', function () {

        assert.strictEqual(typeof(oddly()), 'number');
    });

    it('should generate a pseudo random number from a specific seed using uniform distribution', function () {

        assert.strictEqual(oddly(42), oddly(42));
        assert.strictEqual(oddly(0), oddly(0));
        assert.strictEqual(oddly(Math.MAX_VALUE), oddly(Math.MAX_VALUE));
        assert.strictEqual(oddly(Math.MIN_VALUE), oddly(Math.MIN_VALUE));
    });

    it('should generate a pseudo random number on a given range using uniform distribution', function () {
        var
            n = oddly().range(0, 10);

        assert(n >= 0 && n < 10);
    });

    it('should generate a pseudo random number using exponential distribution', function () {
        var
            n = oddly().exp(10);

        assert.strictEqual(typeof n, 'number');
    });

    it('should generate a pseudo random number using normal distribution', function () {
        var
            n;

        oddly().normal(0, 1);
        n = oddly().gaussian(0, 1); // synonym

        assert.strictEqual(typeof n, 'number');
    });

});
