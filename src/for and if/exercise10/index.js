let numbers = [2,1,4,5,6,3,7,8,1,4,6,8,1,5,7,8,3];
let temp;
for ( let idx = 0; idx < numbers.length; idx++ ){
    console.log(numbers[idx]);
    if (idx>idx+1){
        numbers[idx]= temp;
        numbers[idx]=numbers[idx+1];
        numbers[idx]=temp;
    }

}
