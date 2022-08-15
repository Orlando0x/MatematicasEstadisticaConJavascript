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


function proyeccionPorEmpresa(empresa) {
    if(!empresas[empresa]){
        console.warn("Esta empresa no existe")
    } else {
        const  empresaYears = Object.keys(empresas[empresa]);
        console.log(empresaYears)
        const listaMedianaYears = empresaYears.map((year) => {
            return medianaEmpresa(empresa, year)
        })
        console.log(listaMedianaYears);
        
    }

}
proyeccionPorEmpresa("Freelance");


// Calcular la mediana del salario de cada persona
function medianaPersona (person){

    const juanitaSalariosLista = (findPerson(person).trabajos).map((element) =>
        element.salario
    );

    const medianaSalarios = MathCalculos.calcularMediana(juanitaSalariosLista);
    

    return medianaSalarios;
    }

medianaPersona("Juanita");


// Lista de personas
const listaPersonas = salarios.map((person) => {
    return person.name;
} )

const medianaLista = listaPersonas.map((person) => {
    return medianaPersona(person);
} )

//Ordenar ista de medianas de cada persona, de menor a mayor
const medianaListaOrdenada = medianaLista.sort((a , b) => {
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
    });
    console.log(medianaListaOrdenada)

//Calcular la mediana de salarios entre TODAS las personas
function medianaGeneral() {
    const medianaGeneral = MathCalculos.calcularMediana(medianaLista);
    console.log(medianaGeneral);
}
medianaGeneral();

//Top 10% con mejor salario

function medianaTop10 (listaSalarios) {
const topSalarios = [];
const cantidadPersonas = listaSalarios.length * 0.1;
console.log(cantidadPersonas)

for(let i = 1; i <= cantidadPersonas; i++){
    topSalarios.push(listaSalarios[listaSalarios.length - i])
}
console.log(topSalarios);

//Mediana del top 10% de salarios
const medianaTop10 = MathCalculos.calcularMediana(topSalarios);
console.log(medianaTop10);
return medianaTop10;
}

medianaTop10(medianaListaOrdenada);