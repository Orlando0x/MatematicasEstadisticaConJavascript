/* const array = [1,2,3,5,7,2,"abc",2,"cde",1,"abc",5,6,"abc",9,"abc"]; */

console.log(salarios);
let empresas = {};

const company = () => {
    for(element of salarios){
        for(item of element.trabajos){
            if(!empresas[item.empresa]){
                empresas[item.empresa] = {}
            } else {
                if (!empresas[item.empresa][item.year]) {
                    empresas[item.empresa][item.year] = [];
                } else {
                    empresas[item.empresa][item.year].push(item.salario)
                }
            }
        }
    }

/*         element.trabajos.forEach(item => {
            if(!empresas[item.empresa]){
                empresas[item.empresa] = {}
            } else {
                if (!empresas[item.empresa][item.year]) {
                    empresas[item.empresa][item.year] = [];
                } else {
                    empresas[item.empresa][item.year].push(item.salario)
                }
            }
        });
    }
     */







/*     salarios.forEach(item => {
        item.trabajos.forEach(item => { 
            if (!empresas[item.empresa]){
                empresas[item.empresa] = {};
            } else {
                if(!empresas[item.empresa][item.year]){
                    empresas[item.empresa][item.year] = [];

                } else {
                    empresas[item.empresa][item.year].push(item.salario);
                }
            }
        })

    })

 */


/*     for(let i=0; i < array.length; i++){
        const elemento = array[i].trabajos[0].empresa;

        if(empresas[elemento]){
            empresas[elemento] += 1;
        } else {
            empresas[elemento] = 1;
        }
        
    } */
/*     let arrayList= Object.entries(empresas);
    let listaOrdenada = arrayList.sort((a , b) => {
        if(a[1] > b[1]) return -1;
        if(a[1] < b[1]) return 1;
        return 0;
        });
    console.log[listaOrdenada];
    return listaOrdenada[0][0]; */

}

company(salarios);
console.log(empresas);

