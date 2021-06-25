const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('hello ' + process.env.VAR1))

app.get('/env', (req, res) => res.json(process.env))
app.get('/env-str', (req, res) => res.json(process.env.VAR1))

const port = +process.env.PORT || 8080

console.log('starting on ', port)
console.log('var1 on ', process.env.VAR1)

app.listen(port, () => console.log(process.env.VAR1))