exports.up = function(knex) {
  return knex.schema.createTable("locations", col => {
    col.increments().primary();
    col
      .integer("zip", 10)
      .unique()
      .notNullable();
    col.string("city", 35);
    col.string("state", 2);
    col.string("county", 50);
    col.string("time_zone", 50);
    col.float("latitude", 14, 10).notNullable();
    col.float("longitude", 14, 10).notNullable();
    col.string("country", 2);
    col.integer("estimated_population", 50);
  });
};
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("locations");
};
