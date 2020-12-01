module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/, // อะไรซักอย่างเกี่ยวกับไฟล์ js เนี่ยแหละฟังไม่ออก
        exclude: /node_modules/, // run file node_module
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  }
}