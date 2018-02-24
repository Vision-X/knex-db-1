
exports.up = function(knex, Promise) {
  return knex.schema.createTable('resolutions', function(table) {
    table.increments('id').primary()
    table.string('dueDate')
    table.text('resolution')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('resolutions')
};
