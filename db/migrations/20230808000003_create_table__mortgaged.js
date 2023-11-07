exports.up = function (knex) {
  return knex.schema.createTable('Mortgaged', function (table) {
    table.uuid('id').defaultTo(knex.raw('gen_random_uuid()'));
    table.uuid('shopId').notNullable();
    table.integer('billNumber').notNullable();
    table.text('customerName').notNullable();
    table.text('customerEmail');
    table.text('inRelationWith').notNullable();
    table.text('customerAddress');
    table.text('customerContactNo').notNullable().checkLength('=', 10);
    table.text('customerAlternateNo');
    table.text('customerIdProofNo');
    table.text('itemName').notNullable();
    table.integer('numPieces');
    table.integer('weightGms');
    table.integer('weightMg');
    table.integer('principalAmount');
    table.integer('marketValue');
    table.decimal('interestRate', 5, 2);
    table.date('dateOfMortgage').notNullable().defaultTo(knex.fn.now());
    table.text('status').defaultTo('Pending')

    table.primary('id', 'mortgaged_id__pk');
    table.unique(['shopId', 'billNumber'], 'mortgaged_shopId_billNumber__uk');
    table
      .foreign(['shopId'], 'mortgaged_shopId__fk')
      .references('id')
      .inTable('Shops')
      .onDelete('CASCADE');
    table.timestamps(true, true);
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('Mortgaged');
};
