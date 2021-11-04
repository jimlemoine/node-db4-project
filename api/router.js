const express = require('express')

const Recipes = require('./model')

const router = express.Router()

router.get('/:id', (req, res, next) => {
    const { id } = req.params
    Recipes.getRecipeById(id)
        .then(recipe => {
            if (recipe) {
                res.json(recipe)
            } else {
                next({ status: 404, message: 'Could not find recipe with that id'})
            }
        })
})

module.exports = router
