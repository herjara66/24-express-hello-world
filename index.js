const express = require('express')
const app = express()
const port = 80

app.use(express.static("public/"))

app.get('/ejemplo-express', (req, res) => {
  
  var q = req.query.q
  var k = Number(q)
  var p = req.query.param2

  var html = '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body>Hola Express!<ul>'
  html +=`<li>${q}</li><li>${typeof q}</li>`
  html +=`<li>${k}</li><li>${typeof k}</li>`
  html +=`<li>${p}</li><li>${typeof p}</li>`
  html +="</ul></body></html>"
  res.send(html)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
