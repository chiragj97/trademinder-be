const express = require('express');
const router = express.Router();
const knex = require('../db/db');

router.get('/', async (req, res) => {
  try {
    const records = await knex('Mortgaged').select('*');
    res.status(200).json(records);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching records.' });
  }
});

// Add a new mortgage record
router.post('/add', async (req, res) => {
  try {
    const newRecord = req.body;
    console.log('Record: ',newRecord)
    const insertedRecord = await knex('Mortgaged').insert(newRecord).returning('*');
    res.status(200).json(insertedRecord);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while adding the record.' });
  }
});   

// Update an existing mortgage record
router.put('/update/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedRecord = req.body;
    await knex('Mortgaged').where({ id }).update(updatedRecord);
    res.status(200).json({ message: 'Record updated successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating the record.' });
  }
});

// Delete a mortgage record
router.delete('/delete/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await knex('Mortgaged').where({ id }).del();
    res.status(200).json({ message: 'Record deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting the record.' });
  }
});

module.exports = router;
