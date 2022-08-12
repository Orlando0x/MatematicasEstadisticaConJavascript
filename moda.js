const array = [1,2,3,5,7,2,"abc",2,"cde",1,"abc",5,6,"abc",9,"abc"];

function calcularModa (){
    let listaObj = {};
    
    for(let i=0; i < array.length; i++){
        const elemento = array[i];

        if(listaObj[elemento]){
            listaObj[elemento] += 1;
        } else {
            listaObj[elemento] = 1;
        }
        
    }
    let arrayList= Object.entries(listaObj);
    let listaOrdenada = arrayList.sort((a , b) => {
        if(a[1] > b[1]) return -1;
        if(a[1] < b[1]) return 1;
        return 0;
        });
    console.log[listaOrdenada];
    return listaOrdenada[0][0];
}

calcularModa(array);