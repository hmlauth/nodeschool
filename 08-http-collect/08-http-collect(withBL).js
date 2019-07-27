const hyperquest = require('hyperquest'); // hyperquest
const bl = require('bl'); // buffer list

let url = process.argv[2];
// console.log(url);

hyperquest(url)
    .pipe(bl((err, data) => {
        console.log(data.length);
        console.log(data.toString())
    }))







