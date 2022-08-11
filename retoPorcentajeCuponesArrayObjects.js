const monto = document.getElementById("monto");
const descuento = document.getElementById("descuento");
const btn = document.getElementById("btn")
const texto = document.getElementById("text");
const cupon = document.getElementById("cupon");
const cupones = [
    {codigo: "ABC345", descuento: 5},
    {codigo: "ZNK123", descuento: 15},
    {codigo: "QWE789", descuento: 20},
    {codigo: "ZXC456", descuento: 25},
    {codigo: "IOP963", descuento: 30},   
    ]


btn.addEventListener("click", cuentaTotal)


function cuentaTotal(){
    
    if (monto.value <= 0){
        cupon.innerText = ' '
        texto.innerText = 'ERROR: Debe introducir un monto a pagar mayor a $0'
        
    } else {
        let validationCupon = cupones.filter(function(cuponIndividual){
            return cuponIndividual.codigo === descuento.value;
        })
        function descuentoTotal(){
            const total = (monto.value) - (monto.value * (descuentoFinal / 100));
            texto.innerText = `El monto total a pagar es de: $${total}`;
        }

        if(validationCupon.length >= 1){
            var descuentoFinal = validationCupon[0].descuento;
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
