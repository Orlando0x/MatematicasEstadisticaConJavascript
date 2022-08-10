console.group('Cuadrado');
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado*4;
const areaCuadrado = ladoCuadrado ** 2;

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
})
console.groupEnd('Cuadrado');

console.group('Triangulo');
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo

})
console.groupEnd('Triangulo');

function calculosCuadrado(lado1, lado2) {
    return {
        Perimetro: lado1 + lado2,
        Area: lado1 ** 2,
    }
}
function calculosTriangulo(lado1, lado2, base, altura) {
    return {
        Perimetro: lado1 + lado2 + base,
        Area: (base * altura) / 2,
    }
}

function calcularAreaTriangulo(lado1, base){
    if(lado1 == base){
        console.warn('Este triangulo NO es isosceles')
    } else {
        // h = raizC [(lado1**2)-((base**2)/4)]
        const altura = Math.sqrt((lado1**2)-((base**2)/4));
        return altura.toFixed(2);
        // podemos ahorrarnos el crear la variable, y dejar que el resultado sea lo que regrese
        // return Math.sqrt((lado1**2)-((base**2)/4));
    }

}

calcularAreaTriangulo(4,2);


console.group('Circle');

const radioCircle = 5;
const diametroCircle = 5*2;
const PI = 3.1415;

const circunferenciaCirculo = diametroCircle * PI;
const areaCircle = Math.pow(radioCircle,2) * PI; // Para la potenciacion se puede usar
// Math.pow como el operador **

console.log({
     radioCircle,
     diametroCircle,
     PI,
     circunferenciaCirculo,
     areaCircle,
})

function calcularCirculo(radio){
    return {
        Radio: radio,
        Diametro: radio * 2,
        Circunferencia: (radio * 2) * Math.PI.toFixed(3),
        Area: Math.pow(radio,2) * Math.PI.toFixed(3),
    }


}


console.groupEnd('Circle');