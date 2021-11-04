exports.seed = function(knex, Promise) {
    return knex('steps').insert([
        { step_number: 1, step_instructions: 'get pan ripping hot and steak to room temp', recipe_id: 1},
        { step_number: 2, step_instructions: 'lightly oil the pan and sear the steak hard on both sides', recipe_id: 1},
        { step_number: 3, step_instructions: 'season with salt and pepper and rest at room temp then eat', recipe_id: 1},
        { step_number: 1, step_instructions: 'brown the meat and veg and spices', recipe_id: 2},
        { step_number: 2, step_instructions: 'add stock and tomatoes and cook for 90 minutes', recipe_id: 2},
        { step_number: 3, step_instructions: 'add beans and cook for 30 mins', recipe_id: 2}
    ])
}