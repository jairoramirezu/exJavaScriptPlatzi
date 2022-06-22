// Codigo del cuadrado
console.group("Cuadrados");

  // const ladoCuadrado = 5;
  // console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

  function perimetroCuadrado(lado) {
    return lado * 4;
  } 
  // console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

  function areaCuadrado(lado) {
    return areaCuadrado = lado * lado;
  } 
  // const areaCuadrado = ladoCuadrado * ladoCuadrado;
  // console.log("El area del cuadrado es: " + areaCuadrado  + "cm^2");

console.groupEnd();

// Codigo del triangulo
console.group("Triangulos");

  // const ladoTriangulo1 = 6;
  // const ladoTriangulo2 = 6;
  // const baseTriangulo = 4;
  // const alturaTriangulo = 5.5;
  // console.log(
  // "Los lados del triangulo miden: "
  //   + ladoTriangulo1
  //   + "cm, "
  //   + ladoTriangulo2
  //   + "cm, "
  //   + baseTriangulo
  //   + "cm"
  // );

  // console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

  function perimetroTriangulo(lado1, lado2, base) {
    return Number(lado1) + Number(lado2) + Number(base);
  }
  // console.log("El perimetro de mi triangulo es de: " + perimetroTriangulo + "cm");

  function areaTriangulo(altura, base) {
    return (base * altura) / 2;
  }
  // console.log("El area de mi triangulo es de: " + areaTriangulo + "cm"); 

console.groupEnd();

// Codigo del Circulo
console.group("Circulo");

  // Radio
  // const radioCirculo = 4;
  // console.log("El radio del circulo es de: " + radioCirculo + "cm"); 

  // Diametro
  function diametroCirculo(radio) {
    return radio * 2;
  }

  // console.log("El diametro del circulo es de: " + diametroCirculo + "cm"); 

  // PI
  // const PI = Math.PI;
  // console.log("Pi es: " + PI); 


  // Circunferencia
  function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
  }
  // console.log("El perimetro del circulo es de: " + perimetroCirculo + "cm"); 

  // Area
  function areaCirculo(radio) {
    return Math.PI * (radio * radio);
  }
  // console.log("El area del circulo es de: " + areaCirculo + "cm^2"); 

console.groupEnd();

// Aqui interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

function calcularPerimetroTriangulo() {
  const input5 = document.getElementById("InputTrianguloLado1");
  const value5 = input5.value;
  const input6 = document.getElementById("InputTrianguloLado2");
  const value6 = input6.value;
  const input7 = document.getElementById("InputBase");
  const value7 = input7.value;

  const perimetro = perimetroTriangulo(lado1 = value5, lado2 = value6, base = value7);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const input3 = document.getElementById("InputBase");
  const value3 = input3.value;
  const input4 = document.getElementById("InputAltura");
  const value4 = input4.value;

  const area = areaTriangulo(altura = value3, base = value4);
  alert(area);
}

function calcularPerimetroCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const area = areaCirculo(value);
  alert(area);
}

function calcularAlturaIsosceles() {
  const input1 = document.getElementById("InputBase");
  const value1 = input1.value;
  const input2 = document.getElementById("InputTrianguloLado1");
  const value2 = input2.value;

  function alturaIsosceles(lado, base) {
    return Math.sqrt((lado**2) - ((base**2) /4));
    }

  const altura = alturaIsosceles(value2, value1);
  alert(altura);
}