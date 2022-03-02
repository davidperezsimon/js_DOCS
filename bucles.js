let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);






const object = { a: 1, b: 2, c: 3 };

for (let i in object) {
  console.log(`${i}: ${object[i]}`);
}




let iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}




for (var i = 0; i < 9; i++) {
   n += i;
   mifuncion(n);
}