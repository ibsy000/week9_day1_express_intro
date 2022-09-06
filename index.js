const express = require('express')
const app = express()
const port = 3000

// app is now our application
// has methods, get, post, put, delete
// two arguments, url and callback function(two arguments as well, will always be request and response)
app.get('/', (req, res) => { 
    res.send('Hello World!!')
}) 


app.listen(port, () => {
    console.log(`Hello World app listening on port ${port}`)
})