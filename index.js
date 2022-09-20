const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/subpath', (req, res) => {
  res.send('Subpath');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})