function calcularMediana (array){
    array.sort((a , b) => {
    if(a[1] > b[1]) return 1;
    if(a[1] < b[1]) return -1;
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

let arrayList = [
['1', 2],
['2', 3],
['3', 1],
['5', 1],
['7', 1],
['abc', 1],
['cde', 1],
]

arrayList.sort((a , b) => {
    if(a[1] > b[1]) return 1;
    if(a[1] < b[1]) return -1;
    return 0;
    });