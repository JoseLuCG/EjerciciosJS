const numbers = [11,12,13,14]

function swap (number1,number2){
    let temp;
    temp=numbers[number1];
    numbers[number1]=numbers[number2];
    numbers[number2]=temp;
}

swap(0,3,numbers);
console.log(numbers);

swap(1,2,numbers);
console.log(numbers);