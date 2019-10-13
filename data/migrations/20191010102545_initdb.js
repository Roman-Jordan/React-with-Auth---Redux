exports.up = function(knex) {
  return knex.schema
    .createTable("users", col => {
      col
        .increments("id")
        .notNullable()
        .unique()
      col
        .string("name", 20)
        .notNullable();
    })
    .createTable("address", col => {
      col
        .increments('id')
        .notNullable()
        .unique()
      col
        .string('name',50)
    })
    .createTable("user_data", col => {
      col
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");

    col
        .integer("address_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT")
    col.unique(['user_id','address_id'])
    });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('user_data')
        .dropTableIfExists('address')
        .dropTableIfExists('users')
};
