const {readFileSync, read, readFile} = require('fs')
var loadjson = ()=>JSON.parse(readFileSync('books.json'))
var data = readFileSync('books.json')
console.log(JSON.parse(data)['books'][0])
module.exports = {loadjson};
