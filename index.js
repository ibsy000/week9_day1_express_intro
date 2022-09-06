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
    res.render('index', { firstName: 'Brian', lastName: 'Stanton' }) // can take in props that can be used in ejs file being rendered 'index'
}) 


let users = [
    {
        id: 1,
        username: 'brian',
        age: 55
    },
    {
        id: 2,
        username: 'tatyana',
        age: 34
    },
    {
        id: 3,
        username: 'ripal',
        age: 38
    }
]

app.get('/users', (req, res) => {
    res.render('users', { users })
})


app.listen(port, () => {
    console.log(`Hello World app listening on port ${port}`)
})