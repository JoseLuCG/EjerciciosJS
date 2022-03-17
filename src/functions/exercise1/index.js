const numbers1 = [22,1,4,3,5,7,8,9,12,11];
const numbers2 = [22,7,4,3,5,7,8,9,12,11];
const numbers3 = [22,6,4,4,5,7,8,9,12,11];
const numbers4 = [22,9,6,8,5,7,8,9,12,11];

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

const minor1 = minorValue(numbers1);
console.log("Array 1: ", minor1);
console.log("Array 2: ", minorValue(numbers2));
console.log("Array 3: ", minorValue(numbers3));
console.log("Array 4: ", minorValue(numbers4));