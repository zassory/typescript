(()=>{
    
    const avenger = {
        nombre: 'Steve',
        clave: 'Capitan America',
        poder: 'Droga'
    }

    //Aqui la desesctructuracion ocurrio como argumento
    const extraer = ({ nombre , poder }: any) => {
        //const { nombre , poder } = avenger;
        console.log(nombre);
        console.log(poder);
    }
    
    //extraer(avenger);

    const avengers: string[] = ['Thor','Ironman','Spiderman'];

    //const [ loki,hombre,arana ] = avengers;
    const [ ,,arana ] = avengers;

    //console.log(loki);
    //console.log(hombre);
    //console.log(arana);

    //const extraerArr = (avengers:string[]) => {
    const extraerArr = ([thor,ironman,spiderman]: string[]) => {
        console.log(thor);
        console.log(ironman);
        console.log(spiderman);
    }

    extraerArr(avengers);
    

})();//Funcion anonima autoinvocada