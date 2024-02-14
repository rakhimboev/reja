console.log('web server started')
const express = require('express')
const fs = require('fs')
const app = express()

// MongoDB callling
const db = require('./server').db()

let user;
fs.readFile('database/user.json', 'utf8', (err, data) => {
    if (err) {
        console.log('error: ', err)
    } else {
        user = JSON.parse(data)
    }
})

// step 1: Starting code
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// step 2: session code
// step 3: views code
app.set('views', 'views')
app.set('view engine', 'ejs')

// step 4: routing code
app.post('/create-item', (req, res) => {
    console.log(req)
    res.json({ test: 'success' })
})

app.get('/author', (req, res) => {
    res.render('author', { user: user })
})

app.get('/', (req, res) => {
    res.render('reja')
})

module.exports = app