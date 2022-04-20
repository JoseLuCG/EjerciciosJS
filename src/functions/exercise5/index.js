const numbers = [11,9,13,12]

// Put your code here
function minorInRange( x, y, array) {
    let minorValue = Infinity;
    for (let idx = x; idx <= y ; idx++) {
        if (array[idx] < minorValue){
            minorValue = array[idx];
        }
    }
    return minorValue;
}

console.log(minorInRange(0,3,numbers));
console.log(minorInRange(2,3,numbers));
console.log(minorInRange(1,3,numbers));