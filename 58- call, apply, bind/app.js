/* Recordando el uso de that */
var nombre = "Daniel";

function Persona(nombre) {
    const that = this;
    that.nombre = nombre;

    return function() {
        console.log(that.nombre);
    }
}

const persona1 = new Persona('Carlos');

persona1();

/* ============================================== */

this.lugar = "Contexto Global";
console.log(this); // Expected Output : Object Window

function saludar() {
	console.log(this); // Expected Output : Object Window
	console.log(`${this.lugar}`); // Expected Output : Contexto Global
}

saludar(); // Expected Output : Object Window | Contexto Global

/* Uso del método call */
console.log("****** call ******");

const obj = {
    lugar: "Contexto Objeto"
}

/*  Con el método call al llamar a la función saludar le defino que funcione
bajo el contexto del objeto llamado obj. */

saludar.call(obj); // Expected Output : Contexto Objeto 

/* Uso del método aply */
console.log("****** aply ******");

saludar.apply(obj);

/* 
    Diferencia entre call y aply 
    La diferencia radica en el caso quiera trabajar con una función con parametros,
    con call se mandan los argumentos separados por comas y con aply dentro un array.
*/
console.log("***** Diferencia entre call y aply *****")

this.edad = 37;

function consultarEdad(raza, estado) {
    console.log(
		`${this.nombre} es de raza ${raza} se encuentra ${estado} y tiene ${this.edad} años de edad`
	);
}

consultarEdad();

const Animal = {
    nombre: "Negro",
    edad: 45
}

consultarEdad.call(Animal, "Pequines", "Bien"); /* Funciona en el contexto del objeto Animal */

consultarEdad.call(null, "Pequines", "Bien"); /* Funciona en el contexto global */

consultarEdad.call(this, "Pequines", "Bien"); /* Funciona en el contexto global */

consultarEdad.apply(Animal, ["Doberman", "Mal"]); /* Funciona en el contexto del objeto Animal */

consultarEdad.apply(null, ["Doberman", "Mal"]); /* Funciona en el contexto global */

consultarEdad.apply(this, ["Doberman", "Mal"]); /* Funciona en el contexto global */

/*  Uso del método bind 

    El método bind(nameContext) nos permite enlazar contextos diferentes
*/
console.log("****** bind ******");

this.nick = "window";

const persona = {
    nick : "Daniela",

    saludar: function() {
        console.log(this); // Expected Output : Object persona
        console.log(`Hola ${this.nick}`); // Expected Output : Hola Daniela
    }
}

persona.saludar(); 

/* Con el método bind le indico que enlace el contexto del objeto persona.*/
const persona2 = {
    saludar: persona.saludar.bind(persona) // Expected Output : Hola Daniela
}

persona2.saludar(); // Expected Output : Hola Daniela


const persona3 = {
    saludar: persona.saludar.bind(this), // Expected Output : Hola window
}/* El objeto persona 3 fue creado en el contexto global por tanto this apunta 
al contexto global. */

persona3.saludar(); // Expected Output : Hola window

