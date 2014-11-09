
var
    mt = require('./src/mersenne-twister');

module.exports = function () {

    return (new mt(123)).random();
};
