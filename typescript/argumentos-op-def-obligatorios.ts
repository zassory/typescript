(function(){

    function activar(   quien : string,//Obligatorio
                        momento?: string,//Opcional
                        objeto: string = 'Batiseñal'){//Por defecto
        if(momento){
            console.log(`${ quien } activó la ${ objeto } en la ${momento}`);
        }else{
            console.log(`${ quien } activó la ${ objeto }.`);
        }
    }
    activar('Gordon','Tarde');
    
})();//Funcion anonima autoinvocada