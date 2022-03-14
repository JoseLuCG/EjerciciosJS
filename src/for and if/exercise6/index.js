const mix = [undefined,22,"1",4,3,"5",7,NaN,8,"9","12",11,null];
let strings = [];
let numbers = [];
let counter = 0;
for (let item of mix) {
    // Put your code here
    if (typeof item === "string"){
        strings.push(item);
    }else {
        numbers.push(item);
    }
}

console.log("Strings:",strings,"Numbers:",numbers)