numbers = [4,2,9,6,1,0,3,6,5,2,9];

function aGreatherThanB (a, b) {
    // Put your code here
}

function bGreatherThanA (a,b) {
    // Put your code here
}

function swap (idxA, idxB, array) {
    // Put your code here
}

function sort (comparator, array) {
    for ( let currentIdx = 0 ; currentIdx < array.length-1 ; currentIdx++) {
        for ( let nextIdx = currentIdx+1 ; nextIdx < array.length ; nextIdx++ ) {
            if (
                comparator(array[currentIdx], array[nextIdx])
            ) swap (currentIdx, nextIdx, array)
        }
    }
}

console.log(numbers);
sort(aGreatherThanB, numbers);
console.log(numbers);
sort(bGreatherThanA, numbers);
console.log(numbers);