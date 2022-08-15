const MathCalculos = {};

MathCalculos.esPar = function esPar(array) {
    let elements = array.length % 2
    return elements == 0;
}

MathCalculos.calcularPromedio = function calcularPromedio(){
    /*  for(let element of array){
                let suma = 0;
                suma = suma + element;
        } */
        
        /* function sumarElementos (valorAcumulado, valorNuevo){
            return valorAcumulado + valorNuevo;
        }
        let sumaArray = array.reduce(sumarElementos) */
        
        let sumaArray = array.reduce( (valorAcumulado, valorNuevo) => valorAcumulado + valorNuevo)
        let promedio = sumaArray / array.length;
        return promedio.toFixed(2);
}

MathCalculos.calcularMediana = function calcularMediana (array) {
    array.sort((a , b) => {
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
        });
// se puede simplificar array.sort((a,b) => a - b);
    let mitad = array.length / 2;
    if (MathCalculos.esPar(array)){
        let mediana = (array[mitad-1] + array[mitad]) / 2
        return mediana;
    } else {
        let mediana = (array[(mitad-1).toFixed(0)]);
        return mediana
    }
}

MathCalculos.calcularModa = function calcularModa (){
    let listaObj = {};
    
    for(let i=0; i < array.length; i++){
        const elemento = array[i];

        if(listaObj[elemento]){
            listaObj[elemento] += 1;
        } else {
            listaObj[elemento] = 1;
        }
    }
}

MathCalculos.calcularMediaTruncada = function calcularMediaTruncada (array, recorte){
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

