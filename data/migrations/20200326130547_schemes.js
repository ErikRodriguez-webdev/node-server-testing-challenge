exports.up = function(knex) {
  return knex.schema.createTable("schemes", (tbl) => {
    tbl.increments();
    tbl.string("scheme_name", 50).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("schemes");
};
