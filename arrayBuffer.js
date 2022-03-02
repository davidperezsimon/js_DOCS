let buffer = new ArrayBuffer(16); // crea un búfer de longitud 16

let view = new Uint32Array(buffer); // trata el buffer como una secuencia de enteros de 32 bits

alert(Uint32Array.BYTES_PER_ELEMENT); // 4 bytes por entero

alert(view.length); // 4, almacena esa cantidad de enteros
alert(view.byteLength); // 16, el tamaño en bytes

// escribamos un valor
view[0] = 123456;

// iteración sobre los valores
for(let num of view) {
  alert(num); // 123456, luego 0, 0, 0 (4 valores en total)
}