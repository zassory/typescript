(function(){

    let mensaje: string = 'Hola';
    let numero : number = 123;
    let booleano: boolean = true;
    let hoy: Date = new Date();
    
    let cualquiercosa: string | number | boolean | Date;
    cualquiercosa = mensaje;
    cualquiercosa = numero;
    cualquiercosa = booleano;
    cualquiercosa = hoy;

    let spiderman = {
        nombre: 'Peter',
        edad: 30
    };

    spiderman = {
        nombre: 'Nicolas',
        edad: 39,        
    };

})();//Funcion anonima autoinvocada