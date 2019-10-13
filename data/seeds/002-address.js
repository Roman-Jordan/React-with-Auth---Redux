
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('address').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('address').insert([
        {name: 'roman'},
        {name: 'billy'},
        {name: 'ryan'}
      ]);
    });
};
