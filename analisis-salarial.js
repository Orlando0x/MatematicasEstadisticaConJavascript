

//Analisis Juanita, sacar mediana de sus salarios

function findPerson(person){
    return salarios.find((element) =>
        element.name === person
    )

}
function listaSalarios (person){
    let trabajosPerson = findPerson(person).trabajos;
    return (trabajosPerson).map((element) =>
    element.salario
);
}



function medianaPersona (person){

const juanitaSalariosLista = (findPerson(person).trabajos).map((element) =>
    element.salario
);

const medianaSalarios = MathCalculos.calcularMediana(juanitaSalariosLista);

console.log(medianaSalarios);
return medianaSalarios;
}