/* 
    Sintaxis de setTimeout: 
    - En el primer parametro se define la función anonima que se ejecutara
    tras el tiempo definido en el segundo parametro.

    - Solo se ejecuta una sola vez

    setTimeout( () => {
        // Cuerpo de la función
    }, timeout);
*/


/* Ejemplo de un setTimeout que se ejecuta luego de 3 segundos de tiempo. */
//console.log('Inicio');
//setTimeout( () => { console.log("Ejecutando el setTimeout luego de 3 segundos");}, 3000);

/* 
    El setInteval se ejecuta indefinidamente cada intervalo de tiempo.
    Sintaxis:
    setInterval(() => {
        // Cuerpo de la función
    }, interval);
*/
/* setInterval(() => {
    console.log('Ejecutando un setInterval cada 3 segundos.')
}, 3000); */

/* Ejemplo de uso. */
/* setInterval(() => {
    console.log(new Date().toLocaleTimeString()) 
}, 1000); */

/* clearTimeout: Para eliminar un setTimeout, que tiene que estar almacenado en una variable. */
/* let temporizador = setTimeout(() => {
    console.log('Aca existe un setTimeout');
}, 1000);

clearTimeout(temporizador);
console.log('Luego del clearTimeout'); */

/* clearInterval */
let temporizador = setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);

clearInterval(temporizador); /* Detiene el setInterval */
console.log('Luego del setInterval');