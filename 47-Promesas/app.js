/*  Las promesas trabajan con dos recursos principales el resolve y el reject 
    Tiene el funcionamiento similar a un if - else 
    -   Si la promesa se cumple se ejecuta el resolve 
    -   Si la promesa falla ejecuta el reject
*/

function cuadradoCallback(value, callback) {
    setTimeout(() => {
        callback(value, value * value);
    }, 0 | Math.random() * 1000);
}

cuadradoCallback(2, (value, result) => {
    console.log("Inicio Callback");
    console.log(`Callback: ${value}, ${result}`);
});

/* 
    -   Para una promesa ya no nesecitaremos a la función recibida como parametro 
    -   La función cuadradoPromise retorna una instancia del objeto Promise.
    -   Este objeto Promise el momento de ser creado recibe como parametro una función declarada, 
        o bien podria ser una función flecha la cual cuenta con 2 parametros el resolve y el reject, 
        donde dependiendo el caso recibiran valores.
    -   Los métodos reject y resolve son métodos estaticos no requieren de una instancia.
*/
function cuadradoPromise(value) {
    // Validamos la entrada oara que sea un valor de tipo number
    if( typeof value !== "number" ) 
        return Promise.reject(`Error, el valor "${value}" ingresado no es un número`); /* Aprender sobre métodos estaticos en JavaScript */

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value : value,
                result : value * value
            });
		}, 0 | (Math.random() * 1000));
    });
}

cuadradoPromise(0)
    .then(obj => {
        console.log('Inicio Promise'); 
        console.log(`Promise ${obj.value}, ${obj.result}`);
        return cuadradoPromise(1);        
    })
    .then(obj => {
        console.log(`Promise ${obj.value}, ${obj.result}`);
        return cuadradoPromise(2);
    })
    .then(obj => {
        console.log(`Promise ${obj.value}, ${obj.result}`);
        return cuadradoPromise(3);
    })
    .then(obj => {
        console.log(`Promise ${obj.value}, ${obj.result}`);
        return cuadradoPromise("Hola");
    })
    .then(obj => {
        console.log(`Promise ${obj.value}, ${obj.result}`);
        return cuadradoPromise(5);
    })
    .then(obj => {
        console.log(`Promise ${obj.value}, ${obj.result}`);
        console.log('Fin del Promise');
    })    
    .catch( err => console.error(err));
