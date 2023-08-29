const express = require('express');
const cors = require('cors');
const mortgagedRouter = require('./routes/mortgaged');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/mortgaged', mortgagedRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
