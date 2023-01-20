(() => {

    const sumar = (a:number,b:number): number => {
        return a + b;
    }

    const nombre = ():string => 'Hola Nicolas';

    const obtenerSalario = ():Promise<string> => {

        return new Promise((resolve,reject) => {
            resolve('Nicolas');
        });
    }

    obtenerSalario().then(a => console.log(a.toUpperCase()));

})();