const moneyBox = coins => {
    var saveCoins = 0
    saveCoins += coins
    console.log({ saveCoins })
}

moneyBox(5)
moneyBox(10)

// Aquí no hay recuerdo en la primera ejecucion da 5
// despues 10
// no da 15 

const moneyBox2 = () => {
    var saveCoins = 0
    const countCoins = coins => {
        saveCoins += coins
        console.log({ saveCoins })
    }
    return countCoins
}

let myMoneyBox = moneyBox2()
myMoneyBox(5)
myMoneyBox(10)