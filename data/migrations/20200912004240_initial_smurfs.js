
exports.up = async function(knex) {
  await knex.schema.createTable("smurfs", (table) => {
      table.increments()
      table.text("name").notNull()
      table.integer("age").notNull()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("smurfs")
};
