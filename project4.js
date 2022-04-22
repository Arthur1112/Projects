// Write a function that is given an array and checks if a given string is in it

const array = ['Todd', 'Darie', 'Jonathan', 'Zach', 'Manny'];
const checkIfInArray = 'Ahmed';

// const arrayChecker = (listOfNames, nameToCheck) => {
//     if (listOfNames.includes(nameToCheck)){
//         return 'Yes he is here'
//     } else {
//         return 'Nope he is not here'
//     }
// }
// console.log(arrayChecker(array, checkIfInArray))

//Shorter way

const arrayChecker = (listOfNames, nameToCheck) => {
    return listOfNames.includes(nameToCheck)
}

arrayChecker(array, checkIfInArray)? console.log('Yes he is here') : console.log('Nope he is not here');