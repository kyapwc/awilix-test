const express = require('express')
const container = require('./container')
const routes = require('./routes')

const app = express()

app.use('/api', routes)

const PORT = process.env.PORT || 50069

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
