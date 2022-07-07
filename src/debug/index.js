var a = 'Hello'

function hello() {
    let b = 'Hello World'
    const c = 'Hello World!'
    if (true) {
        let d = 'Hello World!!'
        debugger
    }
}

hello()



// Debugger otro ejemplo con el de closure

const moneyBox2 = () => {
    debugger
    var saveCoins = 0
    const countCoins = coins => {
        debugger
        saveCoins += coins
        console.log({ saveCoins })
    }
    return countCoins
}

let myMoneyBox = moneyBox2()
myMoneyBox(5)
myMoneyBox(10)