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
const resultadoDoble = (a, b) => {
    return (a + b) * 2;
};
const getAvenger = (nombre, poder, arma = "arco") => {
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
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return this.base * this.altura;
    }
}
