
/*PUNTO 1
function numero(num) {
    if (num % 2 === 0) {
        console.log('El numero es par');
    } else {
        console.log('El numero es impar');
    }
}
let num = parseInt(prompt("Ingresar un número: "));
numero(num);
*/


/*
PUNTO 2
function celsius(numero) {
    console.log('La temperatura es: ' + ((numero * 9 / 5) +32) + ' grados');
}
let numero=parseFloat(prompt("Ingresa la temperatura: "));
celsius(numero)
*/


/*
PUNTO 3
function promedio(numeros1) {
    if (numeros1.length === 0) return 0;
    const suma= numeros1.reduce((acumulador, num)=> acumulador + num, 0);
    return suma/numeros1.length;
}
const numeros1=[2,4,6,8];
console.log(promedio(numeros1));
*/


/*PUNTO 4
function obtenerPrimosHasta(n) {
    const primos = [];    
    for (let i = 2; i <= n; i++) {
        let esPrimo = true;

        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                esPrimo = false;
                break;
            }
        }
        if (esPrimo) {
            primos.push(i);
        }
    }
    return primos;
}
const input = prompt("Ingrese un número:");
const numero = parseInt(input, 10);

if (numero > 1) {
    const primos = obtenerPrimosHasta(numero);
    console.log(`Números primos de 1 hasta ${numero}:`, primos);
} else {
    console.log("Por favor, ingrese un número válido mayor que 1.");
}
*/

/*PUNTO 5
function contarDigitos(n) {
    if (n < 10) return 1;
    return 1 + contarDigitos(Math.floor(n / 10));
}
console.log(contarDigitos(12345));
*/


/*PUNTO 6
function rangoHasta(n) {
    if (n === 0) return [0];
    return rangoHasta(n - 1).concat(n);
}
console.log(rangoHasta(5));
*/


/*PUNTO 7
function suma(lista) {
    if (lista.length === 0) return 0;
    return lista[0] + suma(lista.slice(1));
}
console.log(suma([1, 2, 3, 4, 5]));

*/

/*PUNTO 8
function promedio(lista) {
    if (lista.length === 0) return 0;
    return suma(lista) / lista.length;
}
console.log(promedio([1, 2, 3, 4, 5]));
*/