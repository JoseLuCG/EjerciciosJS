const numbers = [0,1,5,2,7,5,0,0,9,5,5,6];
let counter = 0;

// Put your code here
for (let item of numbers){
    if (item === 5){
        counter++;
    }
}
console.log(counter)