const mymodule = require("./module");

console.log('process.argv', process.argv);
const filePath = process.argv[2];
const extName = process.argv[3];

mymodule(filePath, extName, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        return console.log(data.join("\n"))
    }  
});
