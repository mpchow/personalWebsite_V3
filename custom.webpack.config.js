const fs = require('fs')

// WebPack.config File
const fileConfig = 'node_modules/react-scripts/config/webpack.config.js'

new Promise((resolve) => {
   fs.readFile(fileConfig, 'utf8', function (err, data) {
      if (err) {
        return console.log(err)
      }
      resolve(data)
   })
}).then((file) => {
    
   let CodeAsString = ""
   let regexCode = /\.\[hash\:8\]'/g
   console.log(file)
   // let regexCode = new RegExp('\.\[hash\:8\]');

   //  let result = file.replace(regexCode, CodeAsString)
   let result = file.replace(`name: 'static/media/[name].[hash:8].[ext]'`, `name: 'static/media/[name].[ext]'`)
   console.log(file)

    fs.writeFile(fileConfig, result, function (err) {
        if (err) return console.log(err)
        console.log('The webpack.config file was modifed!')
    })
})