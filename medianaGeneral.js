/* function medianaPersona (person){

    const juanitaSalariosLista = (findPerson(person).trabajos).map((element) =>
        element.salario
    );
    
    const medianaSalarios = MathCalculos.calcularMediana(juanitaSalariosLista);
    
    console.log(medianaSalarios);
    return medianaSalarios;
    }
 */


function mediaGeneral(){ 
    const listPerson = salarios.map((nombres) => 
        nombres.name);
    console.log(listPerson);
    for(element of listPerson){
        var listaMedianas = MathCalculos.medianaPersona(element);
    }
    console.log(listaMedianas);


}

mediaGeneral();