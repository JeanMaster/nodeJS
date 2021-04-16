const http = require('http')
const { Http2ServerRequest } = require('http2')


http.createServer(router).listen(3000)

function router(request,response) {
    
        console.log('nueva peticion')
        console.log(request.url)

        switch (request.url) {
            case '/hola':
                response.write('hola que tal')
                response.end()
                break;
            default:
                response.write("error 404")
                response.end()
        }
        // response.writeHead(201 , {'content-typ': 'text/plain'})
   
        //escribir respuesta al usuraio
        // response.write('hola, ya se usar HTTP de node JS')
        // response.end();
}


console.log('escuchando http en el puerto 3000')