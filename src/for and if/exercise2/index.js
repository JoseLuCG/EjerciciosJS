const numbers = [0,1,2,4,5,9,3,6,7,8];
counter = 0;

for (let item of numbers) {
    console.log(item);
    counter++;
}

console.log("Hay:", counter, "en el array")