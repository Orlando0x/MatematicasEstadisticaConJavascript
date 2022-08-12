// Calcular media truncada
// De una lista de valores, vamos a eliminar entre el 5% al 25% (tanto del extremo mas alto como del mas bajo)
// y se calcula una media aritmetica de los valores que queden.

const score = [40,50,60,70,80,90]

function calcularMediaTruncada (array, recorte){
    /* Vamos a calcular segun el recorte requerido, cuantos
    elementos vamos a retirar de nuestro array, desde ambos extremos */
    let lengthFinal = Math.round(array.length * (recorte/100));

    // Condicional por si length es < 1 sea 1
    if(lengthFinal >= 1){
        lengthFinal=lengthFinal
    } else (
        lengthFinal = 1
    )
    // Ordenar array
    array.sort((a , b) => {
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
        });

    // Ciclo para aplicar metodo segun la cantidad de veces requeridas por el recorte
    for(let i=0; i < lengthFinal; i++){
        array.shift();
        array.pop();
    }
    // A los elementos que quedaron en mi array, aplico media aritmetica
    let sumaArray = array.reduce( (valorAcumulado, valorNuevo) => valorAcumulado + valorNuevo)
    let promedio = sumaArray / array.length;
    console.log(promedio);
    return promedio.toFixed(2);
}
// Colocar como argumento array y porcentaje de recorte segun la norma entre 5% - 25%
calcularMediaTruncada(score, 25);

// Vamos a calcular la media truncada de la siguiente lista y eliminando el 10% de la lista
calcularMediaTruncada([20,2,10,5,22,20,100,43,45,33,95,3], 10);
