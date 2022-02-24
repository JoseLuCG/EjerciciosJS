let number = 0;
//Se cambia el <plusoen(number)> y el return <number> para no general ambiguedad.
function plusone(sumNumber) {
    number = number + 1;
    return sumNumber;
}

plusone(number);

console.log(number);