const express = require("express");
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json())

const cors = require('cors');
app.use(cors())

const port = process.env.PORT || "3000";
const form = require('./form');
const contact = require('./contact');

// Placeholder for bonus page data
var contacts = [
  {
    firstname: "alex",
    lastname: "carpenter",
    email: "alexanderpcarpenter@gmail.com"
  },
  {
    firstname: "Test1",
    lastname: "Test1",
    email: "alex_test1@gmail.com"
  },
  {
    firstname: "Test2",
    lastname: "Test2",
    email: "alex_test2@gmail.com"
  },
  {
    firstname: "Test3",
    lastname: "Test3",
    email: "alex_test3@gmail.com"
  },
  {
    firstname: "Test4",
    lastname: "Test4",
    email: "alex_test4@gmail.com"
  }
];

// Form post endpoint
app.post('/form/submissions', form.post);

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
