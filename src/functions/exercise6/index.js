const numbers = [11,9,13,12]

// Paste your functions here
function minorInRange( x, y, array) {
    let minorValue = x;
    for (let idx = x; idx <= y ; idx++) {
        if (array[idx] < array[minorValue]){
            minorValue = idx;
        }
    }
    return minorValue;
}
function swap(x,y,array) {
    let temp = null;
    temp = array[x];
    array[x] = array[y];
    array[y] = temp;
}
// Put your code here

function pepito(array){
    let minor = minorInRange(0, 3, array);
    swap(0, minor, array)
}
pepito(numbers)

console.log(numbers);