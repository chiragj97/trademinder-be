exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('Mortgaged').del()
      .then(function () {
        // Inserts seed entries
        return knex('Mortgaged').insert([
          {
            id: '1f4c94d0-9c7e-4e9a-95d5-000000000003',
            shopId: '1f4c94d0-9c7e-4e9a-95d5-000000000002',
            billNumber: 1,
            customerName: 'Jane Smith',
            inRelationWith: 'Wife',
            customerAddress: '123 Main St',
            customerContactNo: '9876543210',
            customerAlternateNo: '9801234567',
            customerEmail: 'jane@example.com',
            customerIdProofNo: 'ABCD123456',
            itemName: 'Gold Necklace',
            numPieces: 1,
            weightGms: 10,
            weightMg: 500,
            principalAmount: 5000,
            marketValue: 7500,
            interestRate: 5.0,
            dateOfMortgage: new Date('2023-06-15'),
          }          
        ]);
      });
  };
  