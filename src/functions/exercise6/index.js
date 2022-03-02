const numbers = [11,9,13,12,0,99]

// Paste your functions here


// Put your code here
for (idx = 0; idx < numbers.length; idx++) {
    for(idx = 0; idx < numbers.length; idx++){
        if (numbers[idx] > numbers[idx + 1]) {
            let temp;
            temp=numbers[idx];
            numbers[idx]=numbers[idx+1];
            numbers[idx+1]=temp;
        }    
    }
}

console.log(numbers);