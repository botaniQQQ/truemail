const http = require('http');
const fs = require('fs');
let db = require('./db');

const options = {
    host: 'api2.temp-mail.org',
    path: '/request/domains/format/json/',
    method: 'GET',
    headers: {
        'Authorization': 'Basic OGM4ODA4YTAtYTQ3ZC00MDkxLTllM2QtODhlMDYwM2ViMzY5OmplWTJTVFliMg==',
        'DNT': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36'
    }
};

const req = http.get(options, function(res) {
    let bodyChunks = [];
    res.on('data', function(chunk) {
        bodyChunks.push(chunk);
    }).on('end', function() {
        let body = Buffer.concat(bodyChunks);
        if (body) {
            body = JSON.parse(body.toString());
        }
        if (body && body.length) {
            body.forEach(function (b) {
                b = b.replace('@', '').trim();
                if (db.indexOf(b) === -1) {
                    db.push(b);
                    console.log('+', b);
                }
                else {
                    console.log('-', b);
                }
            });
        }
        fs.writeFile('./db.json', JSON.stringify(db.sort(), null, 2), function() {
            console.log('The file was saved!');
        });
    })
});
req.on('error', function(e) {
    console.log('ERROR: ' + e.message);
});