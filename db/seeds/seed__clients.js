exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('Clients').del()
      .then(function () {
        // Inserts seed entries
        return knex('Clients').insert([
          {
            id: '1f4c94d0-9c7e-4e9a-95d5-000000000001',
            clientName: 'John Doe',
            clientEmail: 'john@example.com',
            clientGstNo: 'ABCDE12345',
            clientPanNo: 'ABCDE1234F',
            clientContactNo: '1234567890',
            clientAlternateContact: '9876543210'
          }          
          // Add more client entries here
        ]);
      });
  };
  