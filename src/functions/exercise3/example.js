function vat (price, vatType = 0.21) {
    return price * vatType;
}

console.log(vat(1000));

console.log(vat(1000,0.1));

console.log(vat(1000,0.04));