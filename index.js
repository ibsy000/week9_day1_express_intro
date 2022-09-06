// bring in express
const express = require('express')
// create the app
const app = express()
// set up server port
const port = 3000

app.set('view engine', 'ejs')

app.use(logger) // uses logger function before anything else

// app is now our application
// has methods, get, post, put, delete
// two arguments, url and callback function(two arguments as well, will always be request and response)
app.get('/', (req, res) => { 
    console.log(req.test) // we get req.test value from logger function
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

app.get('/users/:id', (req, res) => {
    const id = req.params.id // req comes with object 'params'
    for (let user of users){
        if (user.id == id){
            res.render('user', { user })
            return
        }
    }
    res.send({error: `User with id ${id} does not exist`})
})

app.get('/test/:testId/:testName/:abc/:xyz', (req, res) => {
    console.log(req.params)
    res.send('Test')
})

function logger(req, res, next){
    console.log(req.originalUrl) // one of the req properties originalUrl
    req.test = 123 // .test is a newly created property we just created that is sent to the next() request
    next()
}


app.listen(port, () => {
    console.log(`Hello World app listening on port ${port}`)
})