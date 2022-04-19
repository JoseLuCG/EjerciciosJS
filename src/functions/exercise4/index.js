const numbers = [11,12,13,14]

// Put your code here
function swap(x,y,array) {
    let temp = null;
    temp = array[x];
    array[x] = array[y];
    array[y] = temp;
}

swap(0,3,numbers);
console.log(numbers);

swap(1,2,numbers);
console.log(numbers);