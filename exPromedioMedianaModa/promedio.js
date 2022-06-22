// Promedio
function calcularPromedio1 () {
  const inputMediana = document.getElementById("medianaBox");
  const medianaValue = inputMediana.value; 
  let arrayMediana = Array.from(medianaValue.split(","), Number);

  const sumaLista = arrayMediana.reduce (
    function (valorAcumulado = 0, nuevoValor) {
      return valorAcumulado + nuevoValor;
    }
  );

  const promedioLista = sumaLista / arrayMediana.length;
  alert(promedioLista);
}


// Mediana
function calcularPromedio (lista) {
  const sumaLista = lista.reduce (
    function (valorAcumulado = 0, nuevoValor) {
      return valorAcumulado + nuevoValor;
    }
  );
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

function calcularMediana () {
  const inputMediana = document.getElementById("medianaBox");
  const medianaValue = inputMediana.value; 
  let arrayMediana = Array.from(medianaValue.split(","), Number);
  var listaOrdenada =  arrayMediana.sort(function(a,b){
    return a - b;
  });

  const mitadLista = parseInt(listaOrdenada.length / 2);

  function esPar (numeros) {
    if (numeros % 2 === 0) {
      return true;
    } else {
      return false;
    };
  }

  let mediana;
      if (esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];
        const promedioEle12 = calcularPromedio([elemento1, elemento2]);

        mediana = promedioEle12;
      } else {
        mediana = listaOrdenada[mitadLista];
      };
  alert(mediana);
}

// Moda
function calcularModa () {
  const inputMediana = document.getElementById("medianaBox");
  const medianaValue = inputMediana.value; 
  let arrayModa = Array.from(medianaValue.split(","), Number);
  const listaCount = {};

  arrayModa.map(
    function (elemento) {
      if (listaCount[elemento]) {
        listaCount[elemento] += 1;
      } else {
        listaCount[elemento] = 1;
      }
    }
  );

  const listaCount1 = Object.entries(listaCount).sort(
    function (elementoA, elementoB) {
      return elementoA[1] - elementoB[1];
    }
  );

  const moda = listaCount1[listaCount1.length - 1];
  alert(moda);
}