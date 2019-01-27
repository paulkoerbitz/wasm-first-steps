const { readFile } = require('fs');
const { promisify } = require('util');
const wabt = require('wabt')();

const readFilePromise = promisify(readFile);

/**
 * Takes a WAT filename and converts it into an instantiated WASM module
 *
 * @param string The wat filename
 */
const compile = async (watFile) => {
    const watContents = await readFilePromise(watFile, 'utf-8');
    const wasmModule = wabt.parseWat(watFile, watContents);
    const { buffer } = wasmModule.toBinary({ write_debug_names: true });
    const module = await WebAssembly.compile(buffer);
    return WebAssembly.instantiate(module);
}

module.exports = { compile };