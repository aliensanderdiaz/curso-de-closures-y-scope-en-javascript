const fruits = () => {
    var fruit = 'apple'
    console.log({ fruit })
}

fruits()
// console.log({ fruit })

// No podemos acceder a la variable fruit por fuera de la funcion


const anotherFunction = () => {
    var x = 1
    var x = 2
    let y = 1
    // let y = 2
    console.log({ x, y })
}

anotherFunction()

// volvemos a la mala practica que se puede incurrir usando var debido
// a que se pueden redeclarar variables con el mismo nombre
// por eso se recomienda usar let