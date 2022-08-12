//formula promedio: (1+2+3)/3
let array = [2,4,5,6,7,10,15,2,45,24,2224];

function promedio(){
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
promedio(array);