const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/champs', db.getChamps)
app.get('/champs/:id', db.getChampById)
app.post('/champs', db.createChamp)
app.put('/champs/:id', db.updateChamp)
app.delete('/champs/:id', db.deleteChamp)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})