function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); 


 function subtract(a ,b){
return a-b;
 }
 console.log(subtract(10, 8));


 function multiply(a, b){
    return a * b;
 }
 console.log(multiply(7, 8));

 function divide(a, b){
    return a / b;
 }
 console.log(divide(12, 6))

 function increment(n) {
    return n + 1;
}
console.log(increment(10));

function decrement(n){
    return n - 1
}
console.log(decrement(20))


function makeInt(n) {
    let parsedInt = parseInt(n, 10.11);
    if (isNaN(parsedInt)) {
        return NaN;
    }
    return parsedInt;
}


function preserveDecimal(n){
    let parsedfloat =parseFloat(n ,2.333);
    if (isNaN(parsedfloat)){
        return NaN;
    }
    return parsedfloat
}