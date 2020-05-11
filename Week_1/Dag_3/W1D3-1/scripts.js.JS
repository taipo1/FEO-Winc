let person = {
    name: "Ramsey",
    age: 27
};


console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person['name']);
console.log(person['age']);
person.evaluations = [7, 10 ,9];
console.log(person.evaluations)

let colors = []

colors.push("Blue" , "Orange", "Yellow")
console.log(colors);
console.log(colors[0]);
console.log(colors[2]);
console.log(colors[colors.length -1]);
colors.push("green");
colors.push({greeting: "Hi ik ben een object"});
console.log(colors)
console.log(colors[4].greeting);