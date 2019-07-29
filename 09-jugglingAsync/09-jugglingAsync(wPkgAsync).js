let http = require('http');
let bl = require('bl');

async function getHttp(index) {
    return new Promise((resolve, reject) => {
        http.get(process.argv[2 + index], response => {
            response.pipe(bl((err, data) => {
                resolve(data);
            }))
        })
    })  
}

let results = [];
let count = 3;

async function loopArguments() {
    

    for (let i = 0; i < count; i++) {
        let data = await getHttp(i);
        results.push(data.toString());
        
    }

    printResults(results);
  
}

function printResults(array) {
    array.forEach(cv => console.log(cv));
}

loopArguments();
