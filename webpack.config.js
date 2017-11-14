const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: './playground/main.ts',
  output: {
    path: path.resolve(__dirname, '.playground'),
    filename: 'bundle.umd.js',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  externals: ['@angular/core', '@angular/common', 'ng2-konva', '@angular/platform-browser-dynamic'],
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
};
