let http = require('http');
let url = process.argv[2];
let body = '';

http.get(url, response => {
    response.on('data', chunk => {
        body += chunk
    })
    response.on('end', () => {
        console.log(body.length)
        console.log(body)
    })
})