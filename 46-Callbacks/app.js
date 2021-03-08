/* 
    Información adicional sobre el siguiente ejemplo: 

    -   cuadradoCallback() --> Función que eleva un número al cuadrado
    -   Recibe dos parametros un valor cualquiera en este caso un número que sera 
        elevado al cuadrado, y como 2do parametro la misma función (callback).
    -   Se aplica una caracteristica de la programación funcional llamada Recursividad, 
        que es cuando una función se puede invocar a si misma dentro de ella.
    -   Simularemos la asincronia con el uso del método setTimeout().
    -   El temporizador de nuestro método setTimeout sera dinamico.
    -   La función Math.random() retorna un punto flotante, un número pseudo-aleatorio 
        dentro del rango [0, 1). Esto es, desde el 0 (Incluido) hasta el 1 pero sin 
        incluirlo (excluido), el cual se puede escalar hasta el rango deseado.

*/

function cuadradoCallback(value, callback) {
    var rango = 0 | (Math.random() * 10000);
    console.log("Rango : ", rango); 
    
    setTimeout(() => {
        callback(value, value * value);
        
    }, rango);
}

cuadradoCallback(5, (value, result) => {
    console.log("Inicia Callback");
    console.log(`Callback: ${value}, ${result}`);
});

/* console.log(Math.random() * 10000); */