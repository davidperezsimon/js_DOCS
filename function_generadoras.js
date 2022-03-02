function* idMaker(num){
    while(num <= 10){
        yield num++;
        if(num === 2){
            break;
        }
    }
}

var gen = idMaker(1);

console.log(gen.next()); 
console.log(gen.next()); 
console.log(gen.next()); 
console.log(gen.next()); 