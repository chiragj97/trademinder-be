exports.up = function (knex) {
    return knex.schema.createTable('Shops', function (table) {
      table.uuid('id').defaultTo(knex.raw('gen_random_uuid()'));
      table.uuid('clientId');
      table.text('shopName').notNullable();
      table.text('shopContactNo').notNullable();
      table.text('shopAddress').notNullable();
      
      table.primary('id', 'shops_id__pk');
      table
      .foreign(['clientId'], 'shops_clientId__fk')
      .references('id')
      .inTable('Clients')
      .onDelete('CASCADE'); 
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('Shops');
  };
  