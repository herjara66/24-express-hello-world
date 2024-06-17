function randInt(max) {
  return Math.floor(Math.random() * max + 1);
}

function generarArrayBidimensional() {
  function generarArray() {
    return [randInt(10), randInt(10), randInt(10)];
  }

  var array = [];
  for (i = randInt(4); i < 10; i++) {
    array.push(generarArray());
  }
  return array;
}

function mostrarArrayBidimensional(arrayBidimensional) {

  function mostrarArray(array) {
    var temporal = "";
    array.forEach(function (elemento) {
      temporal += ("<td>" + elemento + "</td>")
    });

    return temporal
  }

  var table = document.getElementById("table")

  arrayBidimensional.forEach(function (array) {
    table.innerHTML += "<tr>" + mostrarArray(array) + "</tr>";
  });
}

mostrarArrayBidimensional(generarArrayBidimensional());
