(function(){

    function getEdad() {
        return 100 + 100 + 300;
    }

    const nombre = 'Nicolas';
    const apellido = 'Caceres';
    const edad = 39;

    const salida1 = nombre + " " + apellido + " ( " + edad + " )";
    const salida2 = `${nombre} ${apellido} ( ${edad} )`;
    const salida3 = `${nombre} \n${apellido}\n( ${ getEdad() } )`;

    console.log(salida1);
    console.log(salida2);
    console.log(salida3);

})();//Funcion anonima autoinvocada