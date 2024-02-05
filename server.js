console.log('web server started')
const express = require('express')
const http = require('http')
const app = express()

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
    res.json({test: 'success'})
})

app.get('/', (req, res) => {
    res.render('harid')
})


const server = http.createServer(app)
let PORT = 3000
server.listen(PORT, () => {
    console.log(`The server is listening at ${PORT}`)
})

