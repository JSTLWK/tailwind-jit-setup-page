const path = require('path');

module.exports = {
  entry: './resource/js/app.js',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'app.js',
  },
};