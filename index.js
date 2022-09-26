
const express = require('express')
const consign = require('consign');
const bodyparser = require('body-parser');

const app = express()

app.use(bodyparser.json());

require('dotenv').config()

consign().include('app/controllers').into(app);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

