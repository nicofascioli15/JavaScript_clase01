/* esta es la 1era clase de js
 */

console.log ("hola mundo!")

/* 
Variables

3 tipos de variales - Espacio de memoria (tipo caja) con algo guardado adentro

- texto (cadena de texto)
- numeros

la palabra reservada var se usaba en la version 5 o anterior,
a partir de las 6 ya no se utiliza. 

utilizar let

las constantes (const) se escriben con mayuscula - es para diferenciar mas rapido

*/

/*

let name = prompt ("ingresa tu nombre")
let age = 35
const PAIS = "Uruguay"

console.log (name)

// operaciones matematicas 

let numeroA = 120
let numeroB = 40
let resultado = numeroA + numeroB
console.log (resultado)
resultado = numeroA - numeroB
console.log (resultado)
resultado = numeroA * numeroA
console.log (resultado)

*/

let numeroA = prompt("ingresa un numero")
let numeroB = prompt ("ingrese otro numero")
numeroA = parseInt(numeroA)
numeroB = parseInt(numeroB)
let resultado = numeroA + numeroB
alert (resultado)
