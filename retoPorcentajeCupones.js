const monto = document.getElementById("monto");
const descuento = document.getElementById("descuento");
const btn = document.getElementById("btn")
const texto = document.getElementById("text");
const cupon = document.getElementById("cupon");


btn.addEventListener("click", cuentaTotal)


function cuentaTotal(){
    console.log(descuento.value);
    if (monto.value <= 0){
        cupon.innerText = ' '
        texto.innerText = 'ERROR: Debe introducir un monto a pagar mayor a $0'

    } else {

        if(descuento.value === "ZNK123"){
        var descuentoFinal = 10;
        cupon.innerText = `Felicidades! Tienes un ${descuentoFinal}% de descuento`
        descuentoTotal();
        } else if (descuento.value === "ABC345"){
            var descuentoFinal = 20;
            cupon.innerText = `Felicidades! Tienes un ${descuentoFinal}% de descuento`
            descuentoTotal();
        } else if (descuento.value === ""){
            var descuentoFinal = 0;
            cupon.innerText = `No has introducido ningun cupon, no tendras ningun descuento`
            descuentoTotal();
        } else {
            var descuentoFinal = 0;
            descuentoTotal();
            cupon.innerText = 'ERROR: Cupon invalido, no tendras ningun descuento'
            texto.innerText = `El monto total a pagar es de: $${total}`;
        }

        function descuentoTotal(){
            const total = (monto.value) - (monto.value * (descuentoFinal / 100));
            texto.innerText = `El monto total a pagar es de: $${total}`;
        }
}
}
