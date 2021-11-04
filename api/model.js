const db = require('../data/db-config');

module.exports = {
    getRecipeById
}

// SELECT recipe_id, recipe_name, step_id, step_number, step_instructions, ingredient_id, ingredient_name, ingredient_quantity 
// FROM recipes as r
// LEFT JOIN steps as s
// ON r.recipe_id=s.recipe_id
// LEFT JOIN step_ingredients as st_i
// ON s.step_id=st_i.step_id
// LEFT JOIN ingredients as i
// ON st_i.ingredient_id=i.ingredient_id;
async function getRecipeById(recipe_id) {
    const rows = await db('recipes as r')
        .leftJoin('steps as s', 'r.recipe_id', 's.recipe_id')
        .select(
            'r.recipe_id as recipe_id',
            'r.recipe_name as recipe_name',
            's.step_id as step_id',
            's.step_number as step_number',
            's.step_instructions as step_instructions',
            'i.ingredient_id as ingredient_id',
            'i.ingredient_name as ingredient_name',
            'st_i.ingredient_quantity as quantity',
            'i.ingredient_unit as unit'
        )
        .leftJoin('step_ingredients as st_i', 's.step_id', 'st_i.step_id')
        .leftJoin('ingredients as i', 'st_i.ingredient_id', 'i.ingredient_id')
        .where('r.recipe_id', recipe_id)
    return rows
}
