const monto = document.getElementById("monto");
const descuento = document.getElementById("descuento");
const btn = document.getElementById("btn")
const texto = document.getElementById("text");


btn.addEventListener("click", cuentaTotal)


function cuentaTotal(){
    const total = (monto.value) - (monto.value * (descuento.value / 100));
    console.log(total);
    texto.innerText = `El monto total a pagar es de: $${total}`;
}
