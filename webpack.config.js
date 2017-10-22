//entry -> output
var path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },{
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
        test: /\.s?css$/
      }]
  },
  devtool: 'cheat-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};


//devtool: "define source map to help debuggin, webpack compiled code becomes readable in the console"

//loader when webpack see a file with a certain extension, it does something with it


//.s?css le point dinterrogation fait en sorte que le s est optionel, alors les .scss et les .css sont utitliser pour les memes rules
