const addTheWordCool = function(array){
    // add your code/
    array.push('cool')
    return array
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]

const amountOfElementsInArray = array => array.length

console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen'])); // 3


const selectBelgiumFromBenelux = item => item[0]

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); 
// resultaat: "Belgie"

const lastElementInArray = array => array[array.length - 1]

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 
// resultaat: "Schildpad"


const presidents = ["Trump", "Obama", "Bush", "Clinton"] 

const impeachTrumpSlice = function(array) {
    array.splice(0, 1)
    return array
}
const impeachTrumpSplice = function(array) {
    array.slice(0 , 1)
    return array
}

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]


const stringsTogether = array => array.join(" ")

console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 
//resultaat: "Winc Academy is leuk ;-}"

const combineArrays = (array1 , array2) => console.log(array1.concat(array2))

combineArrays([1,2,3], [4,5,6]) 
// resultaat: [1,2,3,4,5,6] 

const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}]
    
const findSpiderMan = function (filteredSuperhero) {
    return filteredSuperhero.find(function(superhero){
        return superhero.name === "Spiderman";
    })
}


console.log(findSpiderMan(superheroes)) 
    // Find Spiderman
    // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}


const doubleArrayValues = array => {
    array.forEach((item) => {
        console.log (item + item)
        return item + item
    })
}

const doubleArrayValuesMap = array => {
    array.map(number =>{
        console.log("mapped " + (number + number))
        return number + number
    })
}


doubleArrayValues([1, 2, 3]) 
doubleArrayValuesMap([1, 2, 3]) 
// result should be [2, 4, 6]


const containsNumberBiggerThan10 = array => {
    return array.some(number =>{
        return number > 10;
    })
}




console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11])) 
// result should be true

// const isItalyInTheGreat7 = array => {
//     array.find((item) =>{
//         return item.name ==="Italy"
//     })
// }

const isItalyInTheGreat7 = array => {
        return array.includes("Italy");
}

isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']) 
// result should be true



const tenfold = array => {
    let newArray = [];
    array.forEach((num) => {
        newArray.push(num * 10);
    })
    return newArray;
}

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
// result should be [10, 40, 30, 60, 90, 70, 110]

const isBelow100 = array  => {
    return array.every((item) => {
        return item < 100;
})}

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))
// result should be: false

const bigSum = array => {
    return array.reduce((currentTotal, number) => {
        return number + currentTotal
    }, 0)
}

console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
// result should be 1118
