let maxAge = 88; 
function calculateSupply (age , apd){
    let yearsLeft = maxAge - age;
    let neededSupply = (yearsLeft * 365) * apd;
    console.log(neededSupply);
    return neededSupply;
}



calculateSupply(27 , 4.1255618);