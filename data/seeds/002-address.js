
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('address').del()
    .then(function () {
      // Inserts seed entries
      return knex('address').insert([
        {name: 'roman'},
        {name: 'billy'},
        {name: 'ryan'}
      ]);
    });
};
