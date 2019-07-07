const fs = require("fs");

const filePath = process.argv[2];

fs.readFile(filePath, 'utf8', function cb (err, bufferString) {
    if (err) throw err;
    console.log(bufferString.split('\n').length - 1);
})