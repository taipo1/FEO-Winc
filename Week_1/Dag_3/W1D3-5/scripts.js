let colorArray = ['Yellow', 'Blue' , 'orange']
let i = 0;
while ( i < colorArray.length){
    console.log(colorArray[i])
    i++
}

for (let i = 0; i < colorArray.length; i++){
    console.log(colorArray[i]);
};

colorArray.forEach(element => console.log(element));

/*
 while loop equals 3 lines
 for loop equals 2 lines
 for each loop equals 1 line 

for each loop is makkelijker lezen omdat er geen formule I in staat.

*/

let object = {

    name : "Ramsey",
    age: 27,
    loves: "coding",
    length:"195cm",
    favAnimal:"dog"

}
console.log(Object.entries(object))