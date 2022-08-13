// Haremos la proyeccion salarial usando una media geometrica
// Necesitamos el porcentaje de aumento de cada año, para calcular la media geometrica
// %aumento = (salarioNuevo - salarioViejo) / salarioViejo + 1

const aumentos = [];

function calcularMediaGeometrica (person) {
    const array = listaSalarios(person);

    for (let i=1; i<array.length; i++){
    
        let aumentoPorAnnio = (array[i] - array[i-1]) / array[i-1];
// condicional para cumplir reglas de la Media Geometrica (Si hay un aumento de 0% no sumarle el +1)
        if (aumentoPorAnnio === 0){
            aumentoPorAnnio = 0;
        } else {
            aumentoPorAnnio++;
        }
        aumentos.push(aumentoPorAnnio.toFixed(2));    
    }

    let multiplicarAumentos = aumentos.reduce((valorAcumulado, valorNuevo) => 
    valorAcumulado * valorNuevo);
    let indiceRaiz = 1 / aumentos.length;
    let mediaGeometrica = multiplicarAumentos ** indiceRaiz;
    let proyeccion = mediaGeometrica * array[array.length-1];
    console.log(mediaGeometrica.toFixed(2));
    if (mediaGeometrica === 0) {
            console.log(`${person} para el año que viene proyectamos que no tendras un aumento salarial.`);
    } else {
        console.log(`${person} para el año que viene proyectamos que tendras un salario de $${proyeccion.toFixed(0)}.`);
    }
    return mediaGeometrica.toFixed(2); 
}

calcularMediaGeometrica("Daniel");


