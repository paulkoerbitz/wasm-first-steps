const { compile } = require('./compile');

const run = async () => {
    const instance = await compile('fibonacci.wat');
    console.log(instance.exports.fib(10));
}

run();

