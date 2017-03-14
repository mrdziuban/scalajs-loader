module.exports = {
  entry: './src/main/scala/HelloWorld.scala',
  output: { filename: 'bundle.js' },
  module: {
    rules: [
      { test: /\.scala$/, loader: 'scalajs-loader' }
    ]
  }
}
