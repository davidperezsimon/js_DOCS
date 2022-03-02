class Persona{
    constructor(nombre, edad){
        this._nombre = nombre;
        this._edad = edad;
    }
    hola(){
        return `Me llamo ${this._nombre} y tengo ${this._edad} años`;
    }
}
let nuevaPersona = new Persona('David', 18);
console.log(nuevaPersona.hola())
