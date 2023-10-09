const http = require('http')
const mongodb = require('mongodb')

let db;
const connectionString = "mongodb+srv://umar:umar1999@cluster0.7v4wjlt.mongodb.net/"

mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
    (err, client) => {
        if (err) console.log('Error connecting to Mongodb')
        else {
            console.log('MongoDB connection successful')
            module.exports = client
            const app = require('./app')
            console.log('Successfully connected to Mongodb')
            const server = http.createServer(app)
            let PORT = 5006
            server.listen(PORT, () => {
                console.log(`The server is listening at ${PORT}, http://localhost:${PORT}`)
            })
        }
    })
