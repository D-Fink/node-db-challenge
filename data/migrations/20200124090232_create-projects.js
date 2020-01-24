
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
    tbl.increments();
    tbl.string('project_name').notNullable();
    tbl.text('project_desc').nullable()
    tbl.boolean('completed').defaultTo(false);
  })
  .createTable('tasks', tbl => {
    tbl.increments();
    tbl.integer('project_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('projects')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
    tbl.string('task_desc').notNullable();
    tbl.text('notes').nullable();
    tbl.boolean('completed').defaultTo(false);
  })
  .createTable('resources', tbl => {
    tbl.increments();
    tbl.string('resource_name').notNullable();
    tbl.text('resource_desc').nullable();
  })
  .createTable('projects_resources', tbl => {
    tbl.integer('project_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('projects')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
    tbl.integer('resource_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('resources')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');

    tbl.primary(['project_id', 'resource_id']);
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('projects_resources')
  .dropTableIfExists('resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('projects')
};
