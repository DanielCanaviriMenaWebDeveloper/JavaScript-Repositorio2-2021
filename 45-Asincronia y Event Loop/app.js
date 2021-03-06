/* Código Sincrono Bloqueante */

/* Crearemos una Función Anónima Autoejecutable */
( () => {
    console.log('Código Sincrono');

    console.log('Inicio');

    function dos() {
        console.log('Dos');
    }

    function uno() {
        console.log('Uno');
        dos();
        console.log('Tres');
    }

    uno();

    console.log('Fin');
}
)();

console.log('************************************');

/* Código Asíncrono no Bloqueante */

( () => {
    console.log('Código Asíncrono');

    console.log('Inicio');

    function dos() {
        setTimeout(function anonima_2() {
            console.log('Dos');
        }, 10000);
    }

    function uno() {
        setTimeout(function anonima_1() {
            console.log('Uno');
        }, 5);

        dos();

        console.log('Tres')
    }

    uno();

    console.log('Fin');
}
)();
