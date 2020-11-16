const favesController = require('express').Router()




favesController.get('/animals', (req, res) =>{
    const animals = ['giraffe', 'alligator', 'peacock', 'unicorn']
    res.render('faveAnimals', {animals: animals})
})
favesController.get('/foods', (req, res) =>{
    const foods = ['sweet potatoe', 'green beans', 'pizza', 'tacos']
    res.render('faveFoods', {foods})
})

module.exports = favesController