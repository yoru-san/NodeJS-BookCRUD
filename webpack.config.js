const path = require('path');

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    target: 'node',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};