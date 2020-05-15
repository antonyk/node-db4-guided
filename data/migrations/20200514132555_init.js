
exports.up = function(knex) {

  return knex.schema
    .createTable('suppliers', table => {
      table.uuid('id').primary();
      // table.increments();

      table.string('name', 255).notNullable();
    })
    .createTable('shippers', table => {

    })
    .createTable('clients', table => {

    })
    .createTable('products', table => {

    })
    .createTable('orders', table => {
      table.integer('client_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('clients')
      .onUpdate('CASCADE') // RESTRICT, DO NOTHING, SET NULL, CASCADE
      .onDelete('RESTRICT') // 
    })
    .createTable('order_shippes', table => {
      table.increments();

      table.integer('order_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('orders')
      .onUpdate('CASCADE') // RESTRICT, DO NOTHING, SET NULL, CASCADE
      .onDelete('RESTRICT') // 

      table.integer('shipper_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('shippers')
      .onUpdate('CASCADE') // RESTRICT, DO NOTHING, SET NULL, CASCADE
      .onDelete('RESTRICT') // 
      
    })
  
 };

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('order_shippers')
  .dropTableIfExists('');
  
};
