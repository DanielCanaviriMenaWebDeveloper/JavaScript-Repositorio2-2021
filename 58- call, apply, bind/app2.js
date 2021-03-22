/* 
    Diferencia entre call y aply 
    La diferencia radica en el caso quiera trabajar con una función con parametros,
    con call se mandan los argumentos separados por comas y con aply dentro un array.
*/
console.log("***** Diferencia entre call y aply *****");

this.edad = 37;

/* function consultarEdad(raza, estado) {
	console.log(
		`${this.nombre} es de raza ${raza} se encuentra ${estado} y tiene ${this.edad} años de edad`
	);
} */

consultarEdad = () => 
{
    console.log(this.edad);
}

consultarEdad();



const Animal = {
	nombre: "Negro",
	edad: 45,
};

consultarEdad.call(Animal);

/*
consultarEdad.call(
	Animal,
	"Pequines",
	"Bien"
); */ /* Funciona en el contexto del objeto Animal */

/* consultarEdad.call(
	null,
	"Pequines",
	"Bien"
); */ /* Funciona en el contexto global */

/* consultarEdad.call(
	this,
	"Pequines",
	"Bien"
); */ /* Funciona en el contexto global */

/* consultarEdad.apply(Animal, [
	"Doberman",
	"Mal",
]); */ /* Funciona en el contexto del objeto Animal */

/* consultarEdad.apply(null, [
	"Doberman",
	"Mal",
]); */ /* Funciona en el contexto global */

/* consultarEdad.apply(this, [
	"Doberman",
	"Mal",
]); */ /* Funciona en el contexto global */
