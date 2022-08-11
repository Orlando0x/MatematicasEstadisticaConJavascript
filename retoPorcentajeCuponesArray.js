const monto = document.getElementById("monto");
const descuento = document.getElementById("descuento");
const btn = document.getElementById("btn")
const texto = document.getElementById("text");
const cupon = document.getElementById("cupon");
const cupones = ["ABC345","ZNK123","QWE789","ZXC456","IOP963"]


btn.addEventListener("click", cuentaTotal)


function cuentaTotal(){
    let validationCupon = cupones.some(function(cuponIndividual){
        return cuponIndividual === descuento.value;
    })

    function descuentoTotal(){
        const total = (monto.value) - (monto.value * (descuentoFinal / 100));
        texto.innerText = `El monto total a pagar es de: $${total}`;
    }
    if (monto.value <= 0){
        cupon.innerText = ' '
        texto.innerText = 'ERROR: Debe introducir un monto a pagar mayor a $0'

    } else {

        if(validationCupon){
        var descuentoFinal = 10;
        cupon.innerText = `Felicidades! Tienes un ${descuentoFinal}% de descuento`
        descuentoTotal();

        } else if (!descuento.value) {
            var descuentoFinal = 0;
            descuentoTotal();
            cupon.innerText = 'ERROR: No has introducido ningun cupon, no tendras ningun descuento'
            texto.innerText = `El monto total a pagar es de: $${total}`;
        }
        else {
            var descuentoFinal = 0;
            descuentoTotal();
            cupon.innerText = 'ERROR: Cupon invalido, no tendras ningun descuento'
            texto.innerText = `El monto total a pagar es de: $${total}`;
        }

}
}
