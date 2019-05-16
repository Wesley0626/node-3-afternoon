require('dotenv').config()
const masssive = require('massive')
const express = require('express')
const app = express()
const ctrl = require('./products_controller')


const {SERVER_PORT, CONNECTION_STRING} = process.env
app.use(express.json())
masssive(CONNECTION_STRING).then((database) => {
  app.set('db', database)
})
.catch(err => console.log(err))

app.get('/api/products', ctrl.getAll)
app.get('/api/products/:id', ctrl.getOne)
app.put('/api/products/:id', ctrl.update)
app.post('/api/products', ctrl.create)
app.delete('/api/products/:id', ctrl.delete)





app.listen(SERVER_PORT, () => {console.log(`Eatting jellybeans on ${SERVER_PORT}`)})