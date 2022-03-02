export default k = 12; // en el archivo test.js

import m from './test' // notese que tenemos la libertad de usar import m en lugar de import k, porque k era el export por defecto

console.log(m); // escribirá 12








// module "my-module.js"
function cube(x) {
  return x * x * x;
}
const foo = Math.PI + Math.SQRT2;
var graph = {
    options:{
        color:'white',
        thickness:'2px'
    },
    draw: function(){
        console.log('From graph draw function');
    }
}
export { cube, foo, graph };