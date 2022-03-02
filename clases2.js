function Animales(nombre, especie) {
    this.nombre = nombre;
    this.especie = especie;
}

Animales.prototype.canta = function(){
    return `${this.nombre} puede cantar`;
}

Animales.prototype.baila = function() {
    return `${this.nombre} puede bailar`;
}

let bongo = new Animales("Bongo", "Peludo");

console.log(bongo)