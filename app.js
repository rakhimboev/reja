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
    console.log(req.body)
    const new_reja = req.body.reja
    db.collection('plans').insertOne({reja: new_reja}, (err, data) => {
        if(err) {
            console.log(err)
            res.end('something went wrong')
        } else {
            res.end('success')
        }
    })
})

app.get('/author', (req, res) => {
    res.render('author', { user: user })
})

app.get('/', (req, res) => {
    db.collection('plans').find().toArray((err, data) => {
        if (err) {
            console.log(err)
            res.end('something went wrong')
        } else {
            console.log(data)
            res.render('reja')
        }
    })
})

module.exports = app