const express = require('express')
const app = express()
const port = 80

app.use(express.static("public/"))

app.get('/ejemplo', (req, res) => {
  
  var q = req.query.q
  var k = Number(q)
  var p = req.query.param2

  var html = '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body>Hola Express!<ul>'
  html +=`<li>${q} type: ${typeof q}</li>`
  html +=`<li>${k} type: ${typeof k}</li>`

  if(k == 47) {
    html +=`<li>EASTER EGG: Viva Star Trek</li>`
  } else for (var i = 0; i < k; i++) {
    html +=`<li>i: ${i}</li>`
  }

  html +=`<li>${p} type:${typeof p}</li>`
  html +="</ul></body></html>"
  res.send(html)
})

function calcularMatriz(fil, col) {
  var matriz = []
  for (var i = 0; i <= col; i++) {
    var fila = []
    for (var j = 0; j <= fil; j++) {
      fila.push(Math.floor(Math.random() * 10))
    }
    matriz.push(fila)
  }

  return matriz  
}

app.get('/matriz', (req, res) => {
  var fil = Number(req.query.fil)
  var col = Number(req.query.col)
  
  res.send(calcularMatriz(fil, col))

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
