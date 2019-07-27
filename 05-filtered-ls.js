const fs = require("fs");

const filePath = process.argv[2];
const fileExtension = process.argv[3];

fs.readdir(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    // console.log(data)
    return console.log(data.filter( file => {
        if (file.includes('.')) {
            const [ last ] = file.split('.').reverse();
            return last === fileExtension
        }
    }).join("\n"))
})



// functioning programming is without for loops and data mutation

// var fs = require('fs')
// var path = require('path')

// var folder = process.argv[2]
// var ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })