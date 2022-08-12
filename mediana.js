let array = [1,2,3,4,5];

function esPar(array) {
    let elements = array.length % 2
/*     if (elements == 0){
        console.log('Este array es par')
    } else {
        console.log('Este array es impar')
    } */
    return elements == 0;
}

function calcularMediana (array){
    array.sort((a , b) => {
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
    });
// se puede simplificar array.sort((a,b) => a - b);
    let mitad = array.length / 2;
    if (esPar(array)){
        let mediana = (array[mitad-1] + array[mitad]) / 2
        return mediana;
    } else {
        let mediana = (array[(mitad-1).toFixed(0)]);
        return mediana
    }
}

calcularMediana(array);