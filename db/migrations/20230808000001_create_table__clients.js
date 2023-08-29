exports.up = function (knex) {
    return knex.schema.createTable('Clients', function (table) {
      table.uuid('id').defaultTo(knex.raw('gen_random_uuid()'));
      table.text('clientName').notNullable();
      table.text('clientEmail').notNullable();
      table.text('clientGstNo');
      table.text('clientPanNo');
      table.text('clientContactNo').notNullable().checkLength('=', 10);
      table.text('clientAlternateContact');

      table.primary('id', 'clients_id__pk');    
      table.unique(['clientEmail'], 'clients_clientEmail__uk');  
      table.unique(['clientGstNo'], 'clients_clientGstNo__uk');  
      table.unique(['clientPanNo'], 'clients_clientPanNo__uk');  
      table.unique(['clientContactNo'], 'clients_clientContactNo__uk');  
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('Clients');
  };
  