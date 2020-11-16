// import stuff
const express = require('express')
const app = express()


// create at least 1 route
app.get('/', (req, res) =>{
    res.send('hello from faves-and-hates')
})
// app.listen
app.listen(1337, () =>{
    console.log('server has started!')
})