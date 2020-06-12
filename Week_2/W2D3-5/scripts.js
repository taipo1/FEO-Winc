const superheroes =
[
  {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
  },
  {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
  },
  {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
  },
  {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
  },
  {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
  },
  {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
  },
  {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
},
{
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
},
{
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
},
{
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
},
{
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
},
{
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
},
{
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
},
{
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
},
{
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
  }
]


const superheroNames = superheroes.map((heroname) => {
    return heroname.name
})

console.log(superheroNames)

const lightHero = superheroes.filter((hero)=> {
    if (hero.weight < 190){
        console.log(hero.weight)
        return hero.name;
    }
})

console.log(lightHero)

const heavyHero = superheroes.filter((hero)=> {
    return hero.weight === '200';
}).map((hero) => {
    return hero.name;
})

console.log(heavyHero)

const firstApearance = superheroes.map((fa) => {
    return fa.first_appearance
})

console.log(firstApearance)

const dcComics = superheroes.filter((publisher)=> {
    return publisher.publisher === "DC Comics"
}).map((hero) => {
    return hero.name
})

console.log(dcComics)

const marvel = superheroes.filter((publisher) =>{
    return publisher.publisher === "Marvel Comics"
}).map((hero) => {
    return hero.name
})


console.log(marvel)

const totalWeightDc = superheroes.filter((publisher)=> {
    totalWeight = 0;
    return publisher.publisher ==="DC Comics";
}).map ((hero) => {
    totalWeight = totalWeight + parseInt(hero.weight)
    return totalWeight;
});


console.log(totalWeightDc)

const totalWeightMarvel = superheroes.filter((publisher) => {
    totalWeight = 0;
    console.log(publisher.name)
    return publisher.publisher === "Marvel Comics";
}).map((hero) => {
    if(hero.weight != "unknown")
    totalWeight = totalWeight + parseInt(hero.weight)
    return totalWeight;
});

console.log(totalWeightMarvel)

const heaviestHero = superheroes.map((heroWeight) => {
    maxWeight = 0;
    if (heroWeight.weight != "unknown"){
    return parseInt(heroWeight.weight)
    }
}).filter((weight) => {
    return weight > 1000;
});

console.log(heaviestHero[11])
console.log(heaviestHero)