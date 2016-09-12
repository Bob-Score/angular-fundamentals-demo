var express = require('express');
var events = require('./eventsController'); // this is pulling in this controller for use here
var path = require('path');
var app = express();
var bodyParser = require('body-parser'); // this is an npm module that allows the parsing of json from the request correctly

// points at the current directory 'scripts' and '/../' jumps up 1 lvl to make App the rootpath
var rootPath = path.normalize(__dirname + '/../');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Serves the pages in /app without processing them at all
app.use(express.static(rootPath + '/app'));

// what to do when you get a get reqiest from this url
app.get('/data/event/:id', events.get);

// what to do when you get a get reqiest from this url using the getAll request
app.get('/data/event', events.getAll);

// what to do when you get a post reqiest from this url
app.post('/data/event/:id', events.save);

// use this port to listen out on
app.listen(8000);

// just a msg to show that the server is listening
console.log('Listening on port 8000');
