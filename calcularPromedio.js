//formula promedio: (1+2+3)/3
let array = [2,4,5,6,7,10,15,2,45,24,2224];

function promedio(){
    let suma = 0;
    for(let element of array){
        suma = suma + element;
            if(element === array[array.length-1]){
                let promedio = suma / array.length;
                console.log(promedio.toFixed(2))
            }
    }
}
promedio(array);