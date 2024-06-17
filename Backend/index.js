const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

connectToMongo();
app.use(cors());

app.use(express.json());

// Available routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));

app.get('/', (req, res) => {
  res.send('Drash..');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
