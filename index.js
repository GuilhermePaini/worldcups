
const express = require('express')
const consign = require('consign');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express()

app.use(bodyparser.json());
app.use(cors());

require('dotenv').config()

consign().include('app/controllers').into(app);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

