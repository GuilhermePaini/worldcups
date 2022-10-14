
const custom = require('./config/custom.js')

const app = custom();

require('dotenv').config()

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

