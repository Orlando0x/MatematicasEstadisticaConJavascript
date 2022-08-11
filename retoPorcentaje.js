const monto = document.getElementById("monto");
const descuento = document.getElementById("descuento");
const btn = document.getElementById("btn")
const texto = document.getElementById("text");


btn.addEventListener("click", cuentaTotal)


function cuentaTotal(){

    const total = (monto.value) - (monto.value * (descuento.value / 100));
    console.log(total);
    if(total === 0){
        texto.innerText = 'Recuerda, debes colocar algun monto y luego el descuento'
    } else if(total < 0) {
        texto.innerText = 'ERROR: Has introducido un descuento superior al 100%'
    } else {

        texto.innerText = `El monto total a pagar es de: $${total}`;
    }
}
 