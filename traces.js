'use strict'

require('stackup');

var fs = require("fs");
var domain = require("domain");

module.exports = scenario;

function scenario(jsonPath, cb) {
    // create a new domain
    let d = domain.create();

    // "handle" the error (OMG DON'T DO THIS IN PRODUCTION CODE)
    d.on("error", cb);

    // use the domain
    d.run(function () {
        fs.readFile(jsonPath, {encoding : "utf8"}, function (error, contents) {
            cb(error, JSON.parse(contents));
        });
    });

}
