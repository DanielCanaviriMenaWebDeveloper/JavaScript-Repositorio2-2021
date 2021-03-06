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

const obj3 = {
    nombre: "Nombre del objeto 3",
    edad: "Edad del objeto 3",
    imprimir: () => {
        console.log(this.nombre);
    }
}
console.log("***** this con arrow function *****")
obj3.imprimir() // Expected Outuput : Contexto Globla Daniel
