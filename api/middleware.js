const db = require('../data/db-config')

const checkRecipeId = async (req, res, next) => {
    try {
        const possibleRecipe = await db('recipes')
            .where('recipe_id', req.params.id)
            .first()
            if (possibleRecipe) {
                next()
            } else {
                next({ status: 404, message: 'Could not find recipe with that id'})
            }
    } catch (err) {
        next(err)
    }
}

module.exports = {
    checkRecipeId
}