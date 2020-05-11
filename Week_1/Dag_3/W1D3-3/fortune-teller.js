
//     Write a function named tellFortune that:
//     takes 4 arguments: number of children, partner's name, geographic location, job title.
//     outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids." 
// Call that function 3 times with 3 different values for the arguments. 

function tellFortune(children, partnersName, geoLocation, jobTitle){
    console.log("you will be a " + jobTitle + " in " + geoLocation + " and be married to " + partnersName + " with " + children)
    return "you will be a " + jobTitle + " in " + geoLocation + " and be married to " + partnersName + " with " + children;

}

tellFortune(0 , "Danique", "Deventer", "Full stack developer");
tellFortune(3 , "Danique", "Zwolle", "Senior FED");
tellFortune(2 , "Danique", "Utrecht", "Seo BigDude Media");