/* Un callback es una función la cual es utilizada como parametro en otra función. */

function callback() {
    console.log("Yo soy un callback");
}

function mensaje(fn) { // fn es un parametro de tipo función
    fn(); // Ejecuta el parametro función
}

mensaje(callback);

/* Otro ejemplo de cuando utilizar un callback */

/*
function function1() {
    console.log("mensaje 1");
}

function function2() {
    console.log("mensaje 2");
}

function1();
function2();
*/

/*  Como mostraria respetando el orden en que fueron creadas las funciones sus mensajes, si
    tuviera un método setTimeout dentro la función 1? */

/*  Para este ejemplo sucede que el la salida del resultado es la siguiente: 
        Expected Output : Mensaje 2
        Expected Output : Mensaje 1
    Algo que no deseamos, ya que esperamos que una ves se ejecute la función1, recien 
    proceda a ejecutarse la función2.
*/
function function1() {
    setTimeout(function() {
        console.log("Mensaje 1");
    }, 2000);
}

function function2() {
    console.log("Mensaje 2");
}

function1();
function2();

/* Este problema lo resolveriamos usando un callback */

function function3(fn) {
    setTimeout(function() {
        console.log("Mensaje 3");
        fn();
    }, 5000);
}

function function4() {
    console.log("Mensaje 4");
}

function3(function4);