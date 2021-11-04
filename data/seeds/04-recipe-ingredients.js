exports.seed = function(knex, Promise) {
    return knex('recipe_ingredients').insert([
        { recipe_id: 1, ingredient_id: 1, ingredient_quantity: 1 },
        { recipe_id: 2, ingredient_id: 2, ingredient_quantity: 2 },
        { recipe_id: 2, ingredient_id: 3, ingredient_quantity: 10 },
        { recipe_id: 2, ingredient_id: 4, ingredient_quantity: 5 },
        { recipe_id: 2, ingredient_id: 5, ingredient_quantity: 60 },
        { recipe_id: 2, ingredient_id: 6, ingredient_quantity: 100 },
        { recipe_id: 1, ingredient_id: 3, ingredient_quantity: 1 }
    ]);
};
