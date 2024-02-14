const http = require('http')
const mongodb = require('mongodb')

let db;
const connectionString = 'mongodb+srv://umar:Unuxo7RTmDmZZCmQ@cluster0.ak4sene.mongodb.net/Reja'

mongodb.connect(connectionString, { useNewUrlParser: true, useUnifiesTopology: true },
    (err, client) => {
        if (err) console.log('errrrrrrrrrrrr')
        else {
            console.log('success')
            module.exports = client
            const app = require('./app')
            const server = http.createServer(app)
            let PORT = 3000
            server.listen(PORT, () => {
                console.log(`The server is http://localhost:${PORT}`)
            })
        }
    })


