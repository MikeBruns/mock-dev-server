let jsf = require('json-schema-faker');
let mockDataSchema = require('./mockDataSchema');
let fs = require('fs');

let json = JSON.stringify(jsf(mockDataSchema));

fs.writeFile("./api/db.json", json, function (err) {
  if (err) {
    return console.log(err);
  } else {
    console.log("Mock data generated.");
  }
});