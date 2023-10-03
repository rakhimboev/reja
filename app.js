console.log('Web Server started')
const express = require('express')
const res = require('express/lib/response')
const app = express()
const fs = require('fs');

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
    if (err) {
        console.log('Error: ', err)
    } else {
        user = JSON.parse(data)
    }
})

const db = require('./server').db()

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
    console.log('user is here: /create-item')
    const new_reja = req.body.reja
    db.collection('plans').insertOne({reja: new_reja}, (err, data) => {
        if(err) {
            console.log(err)
            res.end('something went wrong')
        } else {
            res.end('successully created')
        }
    })
})

app.get('/', (req, res) => {
    console.log('user is here: /')
    db.collection('plans').find().toArray((err, data) => {
        if (err) {
            console.log(err)
            res.end('Something went wrong')
        } else {
            // console.log(data)
            res.render('reja', {items: data})
        }
    })
})

app.get('/author', (req, res) => {
    res.render('author', { user: user })
})

module.exports = app