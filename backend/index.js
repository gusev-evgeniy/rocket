const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const router = require('./routers')

const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())

app.use(router)

mongoose
  .connect('mongodb+srv://user:qwert12345@cluster0.uqag4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useUnifiedTopology: true, useNewUrlParser: true
  })
  .then(result => {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`)
    })
  })
  .catch(error => console.log(error))
