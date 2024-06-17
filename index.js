const express = require('express')
const app = express()
const port = 80

app.use(express.static("public/"))

app.get('/ejemplo-express', (req, res) => {
  res.send('Hola Express!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
