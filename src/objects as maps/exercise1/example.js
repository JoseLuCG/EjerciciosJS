const student = {
    nombre: "Xan",
    curso: "IFCT0109",
    notaMedia: 7.2,
    apto: true,
    modulosSuperados: [
        "MF3323",
        "MF4401",
        "MF1200"
    ]
}

// Show object
console.log(student);
// Show property
console.log("Nombre:", student.nombre);

// Change property value
student.nombre = "María"
console.log(student)

// You can do maths or anything
student.notaMedia++;
console.log(student);

// Adding new properties
student['nacimiento'] = 1982;
console.log(student);

// Accesing arbitrary properties
const property = "nacimiento"
console.log(student[property]);

// Has this object a property?
console.log(student.hasOwnProperty("nacimiento"))
console.log(student.hasOwnProperty("cuentaBancaria"))