const fruits = () => {
    if (true) {
        var fruits1 = 'apple'
        let fruits2 = 'banana'
        const fruits3 = 'kiwi'
        console.log({
            fruits1,
            fruits2,
            fruits3
        })
    }
    console.log({
        fruits1,
        // fruits2, 
        // fruits3
    })
}

fruits()
console.log({
    // fruits1,
    // fruits2, 
    // fruits3
})
// Por fuera de un bloque no podemos acceder a variables declaradas con let o const

let x = 1
{
    let x = 2
    console.log({
        x
    })
}
console.log({ x })

// aqui tenemos dos variables x distintas debido a que tienen diferente alcance
// si usaramos var la cosa es distinta la variable dentro del bloque reescribiria la variable global
console.log('Inicio')
console.log('Inicio')
console.log('Inicio')
console.log('Inicio')
console.log('Inicio')
console.log('Inicio')
console.log('Inicio')
console.log('Inicio')
console.log('Inicio')
console.log('Inicio')
console.log('Inicio')
console.log('Inicio')
const anotherFunction = () => {
    for (var i = 0; i < 3; i++) {
        console.log({ i: 'fuera + ' + i })
        setTimeout(() => {
            console.log({ i })
        }, 10000);
    }
}

anotherFunction()
console.log('fin')

// aqui vemos el caso mas tipico del ejemplo de var y let en un bloque for
// usando var vamos a ver que i siempre vale 10
// usando let si tenemos un valor desde 0 hasta 9 en cada iteracion