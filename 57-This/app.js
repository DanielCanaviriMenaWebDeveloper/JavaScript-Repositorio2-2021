/* En el JS de los navegadores, this hace referencia al objeto global Window*/
console.log(this); // Expected Output : Object Window

/* El contexto global por defecto es el Objeto Window */
console.log(window); // Expected Output : Object Window 

console.log(this === window); // Expected Output : true

/* Creando una variable con this para el contexto global Window */

this.nombre = 'Contexto Global';

/* Podemos evidenciar que la variable nombre pasa a ser una de las propiedades del Objeto Window */
console.log(this.nombre); // Expected Output : Contexto Global

console.log(window.nombre); // Expected Output : Contexto Global

function imprimir() {
    this.nombre = this.nombre + " Daniel";
    console.log(this.nombre);
}

/* La variable nombre se puede observar que es global */
imprimir(); // Expected Output : Contexto Global Daniel   

/* Ejemplo de como this vive dentro el contexto de un objeto */
const obj = {
    nombre : 'Nombre del objeto 1',
    edad : 'Edad del objeto 1',
    imprimir : function() {
        console.log(this.nombre); 
    }
}

obj.imprimir(); // Expected Output : Nombre del objeto

/* En este ejemplo la función manejara su propio scope */
const obj2 = {
	nombre: "Nombre del objeto 2",
	edad: "Edad del objeto 2",
	/* Propiedad imprimir a la cual se le asigna una referencia a la función imprimir */
    // imprimir : imprimir
    
	/* https://alligator.io/js/object-property-shorthand-es6/ */
	/* Shorthand caracteristica de ES6 / ES2015 */
	imprimir,
};

console.log("*********");
/* En la salida la propiedad nombre del objeto llamado obj2 se concatena con la cadena de 
texto "Daniel" tal y cual como esta definida en la función imprimir. */
obj2.imprimir(); // Expected Output : Nombre del objeto 2 Daniel

/*  En este ejemplo para el arrow function considera como su contexto,el contexto en
    el que ha sido creado  el objeto llamado obj3, contexto global(objeto window), porque 
    las arrow function no generan su propio scope. */
const obj3 = {
    nombre: "Nombre del objeto 3",
    edad: "Edad del objeto 3",
    imprimir: () => {
		console.log(this.nombre); 
		console.log(this);          
	}
}
console.log("***** this con arrow function *****")
obj3.imprimir() // Expected Outuput : Contexto Global Daniel
                // Expected Outuput : Object Window

/*  Nota: Este comportamiento tiene la caracteristica de enlazar el contexto del padre
    al hijo. Similar a lo que hace el método bind */

/*  Recomendación : Cuando se trabaja con objetos literales y estos tienen definidos 
    métodos que deseas que accedan a las propiedades del objeto literal, se recomienda 
    no usar arrow function y en lugar de eso usar funciones anonimas. */

/* ================================================================================== */

/* Comportamiento del this en una Función Constructora */

/* Las funciones constructoras crean su propio scope */
console.log("***** this con Funciones Constructoras *****");

function Persona(nombre) {
    this.nombre = nombre;

    console.log(this);
    return console.log(this.nombre);
}

/* Creemos un objeto llamado persona1 a partir de la funcion constructora Persona */

let persona1 = new Persona('Daniel'); /* Expected Output : Daniel */


console.log("***** this con concepto de Clousures usando una Funcion Anonima *****");
/* Veamos el comportamiento del this cuando el retorno es otra función de tipo arrow function */

function Animal(nombre) {
    this.nombre = nombre;

    console.log(this);
    return function() {
        console.log(this.nombre);
        console.log(this);
    }
}

let animal1 = new Animal('Rambo');
/* Para ejecutar la función de la instancia animal1 la ejecutamos como método. */
animal1(); /* Expected Output : Contexto Global Daniel */

console.log("***** this con concepto de Clousures usando un Arrow Function *****");
/* Veamos el comportamiento del this cuando el retorno es otra función de tipo arrow function */

function Mueble(nombre) {
    this.nombre = nombre;
    console.log(this);

    return () => {
        console.log(this.nombre);
        console.log(this);
    }        
}

let mueble1 = new Mueble('Ropero');

mueble1(); /* Expected Output : Ropero */

// 10 consejos / trucos de Javascript que conviene saber
/* https://latteandcode.medium.com/10-consejos-trucos-de-javascript-que-conviene-saber-109d8ef99a4c */

/* Truco del that */

console.log("***** Truco del that *****");
/* Veamos el comportamiento del this cuando el retorno es otra función de tipo arrow function */

function Vehiculo(nombre) {
    const that = this;
    console.log("Contexto almacenado" , that);

    that.nombre = nombre;
    console.log(this);

    return function () {
		console.log(that.nombre);
        console.log("Contexto dentro el return ", that);
        console.log("Contexto dentro de la función con this : ", this);
	};        
}

let vehiculo1 = new Vehiculo('Toyota');

vehiculo1(); /* Expected Output : Toyota */

/* that tambien conocido como self */