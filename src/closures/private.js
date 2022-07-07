const person = () => {
    var saveName = 'Name'
    return {
        getName: () => {
            return saveName
        },
        setName: name => {
            saveName = name
        }
    }
}

newPerson = person()
console.log(newPerson.getName())
newPerson.setName('Alex')
console.log(newPerson.getName())