// import stuff
const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

const hatesController = require('./controllers/hatesController')
const favesController = require('./controllers/favesController')
app.set('view engine', 'ejs')
app.use(ejsLayouts)

app.use('/hates', hatesController)
app.use('/faves', favesController)
// create at least 1 route
app.get('/', (req, res) =>{
    res.render('index')
})



// app.listen
app.listen(1337, () =>{
    console.log('server has started!')
})
