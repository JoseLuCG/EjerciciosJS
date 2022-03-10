const numbers = [0,99,3,121,12,1,2];
let sum = 0;
let average = 0;
let counter = 0;
// Put your code here
for (let item of numbers){
    sum += item;
    counter ++;
}
average = sum/counter;
console.log("****************************");
console.log("* Resultado de la suma:",sum,"*");
console.log("****************************");
console.log("Numero de elementos que dividen =>", counter);

console.log("###################");
console.log("# La media es:",average,"#");
console.log("###################");