exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('Shops').del()
      .then(function () {
        // Inserts seed entries
        return knex('Shops').insert([
          {
            id: '1f4c94d0-9c7e-4e9a-95d5-000000000002',
            clientId: '1f4c94d0-9c7e-4e9a-95d5-000000000001',
            shopName: 'Xyz Jewellers',
            shopContactNo: '9123456789',
            shopAddress: 'Somewhere on Earth'
          }          
        ]);
      });
  };
  