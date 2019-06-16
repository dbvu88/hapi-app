const Hapi = require('@hapi/hapi')

const server = Hapi.Server({
    port: 3000,
    host: 'localhost'
})

server.route({
    path: '/hello',
    method: 'GET',
    handler: (req, res) => {
        return('Hello World')
    }
})

server.start()

console.log('Listening on ' + server.info.uri)
