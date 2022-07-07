const helloWorld = () => {
    const hello = 'Hello World'
    console.log({ hello })
}

helloWorld()
// console.log({ hello })

// Aquí tenemos una buena practica
// porque la variable hello existe solamente de manera local

var scope = 'I am global'

const functionScope = () => {
    var scope = 'I am just a local :D'

    const func = () => {
        return scope
    }

    console.log(func())
}

functionScope()

console.log({ scope })

// Aquí tenemos ambito lexico
// tenemos una variable global y una variable local dentro de una funcion
// declarada con el mismo nombre
// si se usa esa variable dentro de la funcion 
// usara la variable local
// ojo la variable global no se reasigna
// sigue teniendo el mismo valor declarado globalmente.

