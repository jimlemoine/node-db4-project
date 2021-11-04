exports.seed = function(knex, Promise) {
    return knex('recipes').insert([
        { recipe_name: 'Steak'},
        { recipe_name: 'Chili'}
    ]);
};
