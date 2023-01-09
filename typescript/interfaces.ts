(()=>{

    interface Xmen {
        nombre: string;
        edad: number;
        poder?: string;
    }

    const enviarMision = ( xmen: Xmen ) => {
        console.log(`Enviando a ${ xmen.nombre } a la misión`);
        console.log(`Y su poder es: ${xmen.poder}`);
    }

    const regresarAlCuartel = ( xmen: Xmen ) => {
        console.log(`Regresando a ${ xmen.nombre } a la casa`)
        console.log(`Y su poder es: ${xmen.poder}`);
    }

    const wolverine : Xmen = {
        nombre: 'Logan',
        edad:60,
        poder: 'Inmortalidad, curacion'
    }

    enviarMision(wolverine);
    regresarAlCuartel(wolverine);

})();//Funcion anonima autoinvocada