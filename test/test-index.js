const assert = require('chai').assert;
const sumov = require('../lib/index');

describe('Sumov is working for:', () => {
    it('objects', () => {
        assert.equal(sumov({a: 2, b: 2, c: -1}), 3);
    });
    it('multilevel objects', () => {
        assert.equal(sumov({a: {a: 2, b: {a: 2, b: {a: -1}}}}), 3);
    });
    it('arrays', () => {
        assert.equal(sumov([2, 2, -1]), 3);
    });
    it('multilevel arrays', () => {
        assert.equal(sumov([[2, [2, [-1]]]]), 3);
    });
    it('combination of both', () => {
        assert.equal(sumov([[{a: [2]}, [{a: [2]}, [{a: [-1]}]]]]), 3);
    });
    it('non-numeric values in object', () => {
        assert.equal(sumov([[{a: ["a"]}, [{a: [""]}, [{a: [null]}]]]]), 0);
    });
    it('non-numeric values', () => {
        assert.equal(sumov("a"), 0);
    });
    it('numeric values', () => {
        assert.equal(sumov("1.0"), 1);
    });
    it('null values', () => {
        assert.equal(sumov(null), 0);
    });
});