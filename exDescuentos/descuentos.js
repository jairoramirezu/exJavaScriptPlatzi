// Funciones Auxiliares
function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function calculaPrecioConCupon (precio, descuento, cupon) {
  const porcentajePrecioConCupon = 100 - (Number(descuento) + Number(cupon));
  const precioConCupon = (precio * porcentajePrecioConCupon) / 100;

  return precioConCupon;
}

// Funciones Generales
if (document.getElementById("inputCuponDiscount")===0) {
  function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const valuePrice = inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount");
    const valueDiscount = inputDiscount.value;

    const priceDiscount = calcularPrecioConDescuento(valuePrice, valueDiscount);

    const resultP = document.getElementById("resultP");
    resultP.innerText = "New price: $" + priceDiscount;
  }
} else {
  function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const valuePrice = inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount");
    const valueDiscount = inputDiscount.value;
    const inputCupon = document.getElementById("inputCuponDiscount");
    const valueCupon = inputCupon.value;

    const priceCupon = calculaPrecioConCupon(valuePrice, valueDiscount, valueCupon);

    const resultP = document.getElementById("resultP");
    resultP.innerText = "New price: $" + priceCupon;
  }
}