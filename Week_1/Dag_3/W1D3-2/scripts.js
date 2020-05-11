/* 

makeTurkeywidth _____
    get one slice of bread
    Add turkey.
    put a slice of bread on top.
*/

//function declaration
function makeSandwich(topping, breadType){
    let completedSandwich =  "Hier is jouw " + breadType + " met " + topping;
    console.log(completedSandwich);
    return completedSandwich;
    
}

function calculateDiscountPrice(totalAmount, discount){
    discountPercentage = totalAmount/100*discount;
    if (totalAmount >= 25){
        console.log(Math.round(totalAmount - discountPercentage))
        return Math.round(totalAmount - discountPercentage);
    }
}


// Function Call
makeSandwich("Hollandse kaas" , "ciabata.");
makeSandwich("Geitenkaas", "italiaanse bol.")
calculateDiscountPrice(35 , 10);