
const express = require('express')
const consign = require('consign');

const app = express()

require('dotenv').config()

consign().include('app/controllers').into(app);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
