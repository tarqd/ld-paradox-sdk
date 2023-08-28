const https = require("https-browserify");
const parse = require('url').parse;
module.exports = Object.assign({}, https);
module.exports.request = function request(url, options, callback) {
    if (arguments.length == 3) {
        return https.request(Object.assign({}, options || {}, parse(url)), callback)  
    } else {
        callback = options;
        options = url;
        return https.request(options, callback)
    }
}
