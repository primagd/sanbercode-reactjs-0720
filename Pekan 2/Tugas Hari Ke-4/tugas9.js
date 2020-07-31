console.log('\n-------------------------Soal 1-------------------------\n')

const newFunction = function literal(firstName, lastName) {
    return {
        firstName,
        lastName,
        fullName: function() {
            console.log(firstName + " " + lastName)
            return
        }
    }
}

//Driver Code 
newFunction("William", "Imoh").fullName()



console.log('\n-------------------------Soal 2-------------------------\n')

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const { firstName, lastName, destination, occupation, spell } = newObject
console.log(firstName, lastName, destination, occupation)



console.log('\n-------------------------Soal 3-------------------------\n')

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
    //Driver Code
console.log(combined)