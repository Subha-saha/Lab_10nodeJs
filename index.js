const http = require('http')
const { loadjson } = require('./nodejson')
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const fs = require("fs");
const { callbackify } = require("util");
const cors = require('cors');
app.use(cors({
    origin: "*",
}))

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => console.log("Server is runnning"));
app.get('/getjson', (req, res) => {
    res.send(loadjson())
})



// Read users.json file
fs.readFile("books.json", function (err, data) {

    // Check for errors
    if (err) throw err;

    // Converting to JSON
    const books = JSON.parse(data);

    console.log(books); // Print users
});



var newBooksDetails = {
  "id":55,
  "name":"Social Studies",
  "language":"English",
  "price":1200
}



fs.writeFile("newbooks.json", JSON.stringify(newBooksDetails, null, 2), err => {
    if (err) throw err;
    console.log("File written sucessfully!");
})