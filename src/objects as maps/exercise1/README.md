# A object is a thing

Los objetos nos permiten representar "cosas" complejas:
```javascript
const students = [];

const newStudent = {
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

students.push(newStudent);
```

* Curiosea en el [example.js](example.js).
* Modifica [index.js](index.js) para contar el número de veces que se repite cada letra en una frase.