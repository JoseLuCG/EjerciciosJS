const numbers = [11,9,13,12]

// Put your code here
function minorInRange( x, y, array) {
    let minorValue = Infinity;
    for (let idx = x, idx < y; idx++) {
        if (array[idx] < minorValue){
            minorValue = array[idx];
        }
    }
}

console.log(minorInRange(0,3,numbers));
console.log(minorInRange(2,3,numbers));
console.log(minorInRange(1,3),numbers);



function minorValue(array) {
    // Put your code here
    let minorValue = Infinity;
    for (let index = 0; index < array.length; index++){;
        if (array[index] < minorValue){
            minorValue = array[index]
            //console.log(minorValue)
        }
    }
    return minorValue;
}