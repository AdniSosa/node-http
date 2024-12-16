const data = require('./data.js');
const http = require('node:http');


const server = http.createServer((req, res) => {
    //console.log('Resquest received');
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Shop Online ${data().title}</title>
        </head>
        <body>
            <h1 style='color: orange'>${data().title}</h1>
            <h2 style='color: red'>${data().subtitle}</h2>
            <h3>${data().description}</h3>
        </body>
        </html>
        `)
})

server.listen(0, () => {
    console.log(`Server listening on port http://localhost:${server.address().port}`);
})