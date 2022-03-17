let numbers = [2,1,4,5,6,3,7,8,1,4,6,8,1,5,7,8,3]

// Put your code here

for (let pos=0; pos < numbers.length; pos++){
    for (let index = pos+1; index < numbers.length; index++){
        if (numbers[pos]> numbers[index]){
            let temp = null;
            temp = numbers[pos];
            numbers[pos] = numbers[index];
            numbers[index] = temp;
        }
    }
}
console.log(numbers)