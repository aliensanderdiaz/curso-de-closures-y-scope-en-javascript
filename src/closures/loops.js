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

// Es un closure creado de forma involuntaria.