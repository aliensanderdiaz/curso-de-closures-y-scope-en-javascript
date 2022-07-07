a = 2
var a
console.log({ a })

// Aqui no hay ningun error la declaración de a es que como
// si internamente alguien la subiera

console.log({ b })
var b = 3

// aqui la variable si es undefined porque lo unico que se sube es
// la declaracion mas no la asignacion

nameOfDOg('Elmo')

function nameOfDOg(name) {
    console.log({ name })
}

// aqui tambien la funcion pareciera que alguien la subiera
// de esta manera se puede usar antes de la declaracion de la funcion