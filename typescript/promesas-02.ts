(()=>{
    
    const retirarDinero = (montoRetirar: number): Promise<number> => {

        let dineroActual = 1000;

        return new Promise((resolve,reject)=> {

            if(montoRetirar >= dineroActual){
                reject('No hay suficiente dinero');
            }else{
                //dineroActual = dineroActual - montoRetirar;
                dineroActual -= montoRetirar;
                resolve(dineroActual);
            }
        });

    }

    retirarDinero(500)
        .then(montoActual => console.log(`Me queda ${ montoActual }`))
        .catch(err => console.warn(err))


})();//Funcion anonima autoinvocada