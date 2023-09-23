console.log('Web Server started')
const express = require('express')
const res = require('express/lib/response')
const app = express()
const http = require('http')
const fs = require('fs')

let user;
fs.readFile('database/user.json', 'utf8', (err, data) => {
    if (err) {
        console.log('Error: ', err)
    } else {
        user = JSON.parse(data)
    }
})

// 1 starting code
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// session code
// 3 views code
app.set('views', 'views')
app.set('view engine', 'ejs')

// 4 routing code
app.post('/create-item', (req, res) => {
    console.log(req.body)
    res.json({ test: 'success' })
})

app.get('/', (req, res) => {
    res.render('purchase')
})

app.get('/author', (req, res) => {
    res.render('author', {user: user})
})

const server = http.createServer(app)
let PORT = 3000
server.listen(PORT, () => {
    console.log(`The server is listening at ${PORT}`)
})