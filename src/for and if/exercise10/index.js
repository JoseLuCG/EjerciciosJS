let numbers = [2,1,4,5,6,3,7,8,1,4,6,8,1,5,7,8,3];
let temp;

for (let idx = 0; idx < numbers.length; idx++){
    for (let idx = 0; idx < numbers.length; idx++)
        if (numbers[idx] > numbers[idx+1]){
        temp = numbers[idx];
        numbers[idx] = numbers[idx+1];
        numbers[idx+1] = temp;
        }
}
console.log(numbers);
