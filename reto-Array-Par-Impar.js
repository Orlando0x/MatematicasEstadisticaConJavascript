let array = [1,2,3,4,5];

function esPar(array) {
    let elements = array.length % 2
    if (elements == 0){
        console.log('Este array es par')
    } else {
        console.log('Este array es impar')
    }
    return elements == 0;
}

esPar(array);