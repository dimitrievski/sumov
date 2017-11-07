const assert = require('chai').assert,
        sumov = require('../lib/index');

describe('Sumov is working for:', () => {
    it('objects', () => {
        assert.equal(sumov({a: 2, b: 2, c: -1}), 3);
    });
    it('multilevel objects', () => {
        assert.equal(sumov({a: {a: 2, b: {a: 2, b: {a: -1}}}}), 3);
    });
    it('multilevel objects, with depth', () => {
        assert.equal(sumov({a: {a: 2, b: {a: 2, b: {a: -1}}}}, 1), 0);
        assert.equal(sumov({a: {a: 2, b: {a: 2, b: {a: -1}}}}, 2), 2);
        assert.equal(sumov({a: {a: 2, b: {a: 2, b: {a: -1}}}}, 3), 4);
        assert.equal(sumov({a: {a: 2, b: {a: 2, b: {a: -1}}}}, 4), 3);
    });
    it('arrays', () => {
        assert.equal(sumov([2, 2, -1]), 3);
    });
    it('multilevel arrays', () => {
        assert.equal(sumov([[2, [2, [-1]]]]), 3);
    });
    it('multilevel arrays, with depth', () => {
        assert.equal(sumov([[2, [2, [-1]]]], 1), 0);
        assert.equal(sumov([[2, [2, [-1]]]], 2), 2);
        assert.equal(sumov([[2, [2, [-1]]]], 3), 4);
        assert.equal(sumov([[2, [2, [-1]]]], 4), 3);
    });
    it('combination of both', () => {
        assert.equal(sumov([{a: [2]}, [{a: [2]}, [{a: [-1]}]]]), 3);
    });
    it('combination of both, with depth', () => {
        assert.equal(sumov([{a: [2]}, [{a: [2]}, [{a: [-1]}]]], 1), 0);
        assert.equal(sumov([{a: [2]}, [{a: [2]}, [{a: [-1]}]]], 2), 0);
        assert.equal(sumov([{a: [2]}, [{a: [2]}, [{a: [-1]}]]], 3), 2);
        assert.equal(sumov([{a: [2]}, [{a: [2]}, [{a: [-1]}]]], 4), 4);
        assert.equal(sumov([{a: [2]}, [{a: [2]}, [{a: [-1]}]]], 5), 3);
    });
    it('non-numeric values in object', () => {
        assert.equal(sumov([{a: ["a"]}, [{a: ["", Number.NaN]}, [{a: [null]}]]]), 0);
    });
    it('non-numeric values', () => {
        assert.equal(sumov("a"), 0);
        assert.equal(sumov("abc"), 0);
        assert.equal(sumov(null), 0);
        assert.equal(sumov(undefined), 0);
        assert.equal(sumov(Number.NaN), 0);
    });
    it('numeric values', () => {
        assert.equal(sumov(1), 1);
        assert.equal(sumov(1.1), 1.1);
        assert.equal(sumov("1"), 1);
        assert.equal(sumov("1.1"), 1.1);
        assert.equal(sumov(Math.PI), Math.PI);
    });
});