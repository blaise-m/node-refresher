const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our homepage.');
    } else if (req.url === '/about') {
        res.end('Welcome to the about page.');
    } else {
        res.end(`<p><em>404:</em> Page not found!</p><a href='/'>Back Home</a>`);
    }
})

server.listen(5000);
