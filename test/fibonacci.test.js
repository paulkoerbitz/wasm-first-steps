const { compile } = require('../src/compile');

describe('wat module fibonacci', () => {
    let fib;

    beforeAll(async () => {
        const instance = await compile('./src/fibonacci.wat');
        ({ fib } = instance.exports);
    })

    it('returns 1 as the first fibonacci value', () => {
        expect(fib(1)).toEqual(1);
    });

    it('returns 55 as the 10th fibonacci number', () => {
        expect(fib(10)).toEqual(55);
    })
})