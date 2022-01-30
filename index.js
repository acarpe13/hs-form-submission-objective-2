require('dotenv').config({path: __dirname + '/.env'})
const express = require("express");
var app = express();

// library to request body from f/e
var bodyParser = require('body-parser');
app.use(bodyParser.json())

// library to allow cross origin requests
const cors = require('cors');
app.use(cors())

// setting port for dev + replit
const port = process.env['PORT'];

// import js files for model controllers
//  /contact serves as a placeholder for a future addition to this application
const form = require('./form');
const contact = require('./contact');
const contactlist = require('./contactlist');

// Serve simple welcome/sitemap to root level domain
app.get('/', function (req, res) {
  res.send(`
    <h1>Welcome to my API</h1>
    <p>Built on express using axios to execute external REST requests</p>
    <br>
    <h2>Available endpoints:</h2>
    <p>POST: /form/submissions</p>
    <p>Response echos Hubspot form response</p>
  `)
});

// Form post endpoint (calls on form.js post)
app.post('/form/submissions', form.post);
app.get('/contactlists', contactlist.get);
// app.get('/contactlist/:id', contactlist.show);

// app listens on configured port
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
