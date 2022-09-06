// bring in express
const express = require('express')
// create the app
const app = express()
// set up server port
const port = 3000

app.set('view engine', 'ejs')

// app is now our application
// has methods, get, post, put, delete
// two arguments, url and callback function(two arguments as well, will always be request and response)
app.get('/', (req, res) => { 
    res.render('index')
}) 

app.get('/abc', (req, res) => {
    res.send('ABC!')
})


app.listen(port, () => {
    console.log(`Hello World app listening on port ${port}`)
})