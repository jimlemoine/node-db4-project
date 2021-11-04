exports.seed = function(knex, Promise) {
    return knex('step_ingredients').insert([
        { step_id: 1, ingredient_id: 1, ingredient_quantity: 1 },
        { step_id: 2, ingredient_id: null, ingredient_quantity: null },
        { step_id: 3, ingredient_id: 3, ingredient_quantity: 1 },
        { step_id: 4, ingredient_id: 2, ingredient_quantity: 2 },
        { step_id: 4, ingredient_id: 3, ingredient_quantity: 10 },
        { step_id: 4, ingredient_id: 4, ingredient_quantity: 4 },
        { step_id: 5, ingredient_id: 6, ingredient_quantity: 100 },
        { step_id: 6, ingredient_id: 5, ingredient_quantity: 60 },
    ]);
};
