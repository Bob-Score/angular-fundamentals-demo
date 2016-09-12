var fs = require('fs');

// when the 'get' request comes in. gets the data from disk
module.exports.get = function(req, res) {
    var event = fs.readFileSync('app/data/event/' + req.params.id + '.json', 'utf8'); // read a file at this location using the params from the request
    res.setHeader('content-type', 'application/json'); //set response content type
    res.send(event); // return/send the response object ..in this case the event variable
};

// when the 'get' request comes in, save the data to disk
module.exports.save = function(req, res) {
    var event = req.body; // get the body from the request
    fs.writeFileSync('app/data/event/' + req.params.id + '.json', JSON.stringify(event)); // create and wrtie a new file with the reqeust body contents
    res.send(event); // return/send the response object ..in this case the event variable
};


// when the 'getAll' request comes in, save the data to disk
module.exports.getAll = function(req, res) {
    var path = 'app/data/event/';

    var files = [];
    try {
        files = fs.readdirSync(path);
    } catch (e) {
        res.send('[]');
        res.end();
    }

    var results = "[";
    for (var idx = 0; idx < files.length; idx++) {
        if (files[idx].indexOf(".json") === files[idx].length - 5) {
            results += fs.readFileSync(path + "/" + files[idx]) + ",";
        }
    }

    results = results.substr(0, results.length - 1);
    results += "]";

    res.setHeader('Content-Type', 'application/json');
    res.send(results);
    res.end();

};
