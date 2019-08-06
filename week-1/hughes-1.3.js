var url = require("url");

var parsedURL = url.parse("https://www.jhughes.co?name=josh");

console.log(parsedURL.protocol);

console.log(parsedURL.host);

console.log(parsedURL.query);