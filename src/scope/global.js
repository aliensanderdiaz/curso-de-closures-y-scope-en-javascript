// Instalar una extensión en Visual Studio Code
// Code Runner de Jun Han

var hello = 'Hello'
var hello = 'Hello +'
// con var podemos declarar la misma variable mas de una vez

let world = 'World'
// let world = 'World +'
// Con let solo se puede declarar una sola vez la variable

const helloWorld = 'Hello World'
// console.log(hello)

const anotherFunction = () => {
    console.log(hello)
    console.log(world)
    console.log(helloWorld)
}

anotherFunction()

const helloWorldFunction = () => {
    globalVar = 'Im Global'
}

helloWorldFunction()
console.log({ globalVar })

// Aquí caímos en una mala practica en programación
// como no usamos ninguna palabra reservada
// La variable queda con un scope global

const anotherFunction2 = () => {
    var localVar = globalVar = 'Im Global'
}

anotherFunction2()
console.log({ globalVar })

// Aquí volvimos a caer en mala practica
// al hacer doble declaración de variable
// volvemos a tener un alcance global