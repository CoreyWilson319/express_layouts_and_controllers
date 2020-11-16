const hatesController = require('express').Router()

hatesController.get('/animals', (req, res) => {
    const animals = ['giraffe', 'alligator', 'peacock', 'unicorn']
    res.render('faveAnimals', {animals: animals})
})


hatesController.get('/foods', (req, res) =>{
    const foods = ['avacado', 'asparagus']
    res.render('hateFoods', {foods})
})

module.exports = hatesController
