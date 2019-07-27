// Collect data across multiple 'data' events and append the results together prior to printing the output. Use the 'end' event to determine when the stream is finished and you can write the output.

const http = require('http');
const fs = require('fs'); // The fs module can be used to read from and write to files using a stream interface. 
let url = process.argv[2];

http.get(url, response => {
    let string = '';
    response
        .setEncoding('utf8')
        .on('data', data => {
            string = string + data;
        })
        .on('end', () => {
            console.log(string.length);
            console.log(string);
        });  
});

