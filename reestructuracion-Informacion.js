/* const array = [1,2,3,5,7,2,"abc",2,"cde",1,"abc",5,6,"abc",9,"abc"]; */

console.log(salarios);
const empresas = {};

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


}

company(salarios);
console.log(empresas);
 
// Sacar la mediana por empresa y año seleccionados en la funcion

function medianaEmpresa (empresa, year){
    array = empresas[empresa][year];
    let mediana = MathCalculos.calcularMediana(array);
    console.log(mediana);
    return mediana;

}
medianaEmpresa("MarketerosCOL",2022);
