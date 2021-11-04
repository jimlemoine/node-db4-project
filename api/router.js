const express = require('express')

const Recipes = require('./model')

const router = express.Router()

router.get('/:id', (req, res, next) => {
    const { id } = req.params
    Recipes.getRecipeById(id)
        .then(recipe => {
                res.json(recipe)
            })
        .catch(next)
})

module.exports = router
