"use strict";
let nombre = "Nicolás Cáceres";
let edad = 39;
let PERSONAJE = {
    nombre,
    edad,
};
const batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"],
};
const resultadoDoble = (a:number, b:number) => {
    return (a + b) * 2;
};
const getAvenger = (nombre:string, poder?:string, arma:string = "arco"):string => {
    let mensaje = "";
    if (poder) {
        mensaje = `${nombre} tiene el poder de: ${poder} y un arma: ${arma}`;
    }
    else {
        mensaje = `${nombre} tiene un ${poder}`;
    }
    return mensaje;
};
const heroe = getAvenger('batman', 'tecnologia');
console.log(heroe);

class Rectangulo {

    constructor(public base:number,public altura:number){
        
    }

    calcularArea(){
        return this.base * this.altura;
    }
}

