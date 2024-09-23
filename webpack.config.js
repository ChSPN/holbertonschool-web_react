const path = require('path');

module.exports = {
  mode: 'development', // Mode de compilation
  entry: './src/index.ts', // Point d'entrée de l'application
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
