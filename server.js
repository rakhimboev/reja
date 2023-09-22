console.log('Web Server started')
const express = require('express')
const app = express()
const http = require('http')

// 1 starting code
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// session code
// 3 views code
app.set('views', 'views')
app.set('view engine', 'ejs')

// 4 routing code
app.get('/', (req, res) => res.end('<h1>Hello, world</h1>'))

app.get('/gift', (req, res) => res.end('<h1 style="background: yellow">Gift zone</h1>'))

const server = http.createServer(app)
let PORT = 3000
server.listen(PORT, () => {
    console.log(`The server is listening at ${PORT}`)
})