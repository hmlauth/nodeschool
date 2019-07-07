// Don't need file system library because we are not interacting with a file, but making an http get request to a URL endpoint.
const http = require('http'); 

// console.log(process.argv); // [ node, file, url ]
// console.log(process.argv[2]); // http://localhost:51138

let url = process.argv[2];
// unlike other callback functions, this one has the signature of just response, without the (err, response) that we're used too. Additionally, this response is a 'Node Stream' object. 

// Similar to http.request(), but automatically sets the HTTP method to GET, and calls req.end() automatically.
http.get( url, (response) => {
    response.setEncoding('utf8').on('data', function(data) { // readable stream with setEncoding to turn buffers into strings
        console.log(data) // print chuncks of data.         
    })
});
// Create a stream to the end point
// Everytime the stream emits data, 


// Key takeaway, understand how a stream works
// Memory management