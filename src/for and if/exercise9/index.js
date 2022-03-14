let numbers = [0,1,2,3,4,5,6,7,8,9]

for ( let left of numbers) {
    for (let right of numbers) {
        console.log(`${left} x ${right} = ${left*right}`)
    }
}