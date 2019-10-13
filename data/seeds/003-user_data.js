
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_data').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user_data').insert([
        {user_id: 1, address_id:1},
        {user_id: 2, address_id:1},
        {user_id: 3, address_id:1},
      ]);
    });
};
