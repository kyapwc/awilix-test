const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./routes')

const { db } = require('./models')
require('./container')

const app = express()
app.use(bodyParser.json())

app.use('/api', routes)

const PORT = process.env.PORT || 50069

const testSqlLite = async () => {
  try {
    await db.authenticate()
    console.log('DB Successfully authenticated!')
  } catch (error) {
    console.log('Sequelize Connection error: ', error)
  }
}

app.listen(PORT, async () => {
  await testSqlLite()
  console.log(`Server is running on port ${PORT}`)
})
