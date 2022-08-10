// Calcular la altura de un triangulo escaleno

const lado1 = 5;
const lado2 = 8;
const lado3 = 4;

const perimetro = lado1 + lado2 + lado3;
const semiPerimetro = perimetro / 2;

const altura = (2 / lado1) * Math.sqrt(semiPerimetro * (semiPerimetro - lado1) * (semiPerimetro - lado2) * (semiPerimetro - lado3))

console.log(altura.toFixed(2));  // 3.27

// Ahora crear una funcion para calcular la altura de cualquier triangulo escaleno

function alturaTriEscaleno (ladoA, ladoB, ladoC){
    const perimetro = ladoA + ladoB + ladoC;
    const semiPerimetro = perimetro / 2;

    if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC ){
        console.warn('Este triangulo NO es escaleno')
    } else {
        const h = (2 / ladoA) * Math.sqrt(semiPerimetro * (semiPerimetro - ladoA) * (semiPerimetro - ladoB) * (semiPerimetro - ladoC));
        return h.toFixed(2);
    }
}