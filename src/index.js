const express = require('express')
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

require('./routes/user.js')(app)

app.get('/', (req, res) => {
  res.status(200).send({
    title: 'Tudo ok por enquanto',
    version: '1.0.0'
  })
})

app.listen(3000, () => {
  console.log(`API Crud is listening on port 3000`)
})