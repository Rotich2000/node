const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('About us page!')
    }
    res.end(
        `<h1>Oops!</h1>
        <p>Page not found!</p>
        <a href='/'>Go back</a>`
    )
})

server.listen(5000)