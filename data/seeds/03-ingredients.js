exports.seed = function(knex, Promise) {
    return knex('ingredients').insert([
        { ingredient_name: 'Steak', ingredient_unit: 'each'},
        { ingredient_name: 'Ground Beef', ingredient_unit: 'pounds'},
        { ingredient_name: 'spices', ingredient_unit: 'tablespoon'},
        { ingredient_name: 'vegetables', ingredient_unit: 'each'},
        { ingredient_name: 'beans', ingredient_unit: 'ounces'},
        { ingredient_name: 'stock', ingredient_unit: 'ounces'},
    ]);
};
