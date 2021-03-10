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
        console.log('Rango : ', rango); 
    setTimeout(() => {
        callback(value, value * value);
        
    }, rango);
}

cuadradoCallback(0, (value, result) => {
    console.log("Callback N° 1");
    console.log(`Callback: ${value}, ${result}`);
    cuadradoCallback(1, (value, result) => {
		console.log("Callback N° 2");
        console.log(`Callback: ${value}, ${result}`);
        cuadradoCallback(2, (value, result) => {
			console.log("Callback N° 2");
            console.log(`Callback: ${value}, ${result}`);
            cuadradoCallback(3, (value, result) => {
				console.log("Callback N° 3");
                console.log(`Callback: ${value}, ${result}`);
                cuadradoCallback(4, (value, result) => {
					console.log("Callback N° 4");
                    console.log(`Callback: ${value}, ${result}`);
                    cuadradoCallback(5, (value, result) => {
						console.log("Callback N° 5");
                        console.log(`Callback: ${value}, ${result}`);
                        cuadradoCallback(6, (value, result) => {
							console.log("Callback N° 6");
                            console.log(`Callback: ${value}, ${result}`);
                            cuadradoCallback(7, (value, result) => {
								console.log("Callback N° 7");
                                console.log(`Callback: ${value}, ${result}`);
                                cuadradoCallback(8, (value, result) => {
									console.log("Callback N° 8");
									console.log(`Callback: ${value}, ${result}`);
								});
							});
						});
					});
				});
			});
		});
    });
});


/* Otra forma de resolver el anterior problema */

/*

function cuadradoCallback(value, fn) {
	var rango = 0 | (Math.random() * 10000);
	console.log("Rango : ", rango);

	setTimeout(() => {
		fn(value, value * value);
	}, rango);
}

function callback(value, result) {
    console.log("Callback version 2");
	console.log(`Callback: ${value}, ${result}`);
}

cuadradoCallback(10, callback);

*/