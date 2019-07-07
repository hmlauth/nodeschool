// console.log(process.argv);

let sliceNumber = process.argv.length - 2;
console.log(process.argv.slice(-sliceNumber)
    .map(element => parseInt(element))
    .reduce((accum, cv) => accum + cv));