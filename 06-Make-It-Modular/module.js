const fs = require('fs');

module.exports = function (filePath, extName, cb) {
    fs.readdir(filePath, 'utf8', (err, data) => {
        if (err) {
            return cb(err)
        } else {
            return cb(err, data.filter( file => {
            if (file.includes('.')) {
                const [ last ] = file.split('.').reverse();
                return last === extName
            }
        }))
    }})
}



