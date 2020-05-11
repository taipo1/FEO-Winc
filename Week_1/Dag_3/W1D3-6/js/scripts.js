
let name = prompt("what is your name?");
alert("Welcome to Guess the number " + name)

let minPrompt = prompt("guess a number between")
let maxPrompt = prompt("and")
// force difference of >10
while(maxPrompt - minPrompt < 10){
    alert("The diffrence between lowest and highest number has a minimum of 10 you cheater!")
    minPrompt = prompt("guess a number between")
    maxPrompt = prompt("and")
}
let correctAnswer = Math.round(Math.random() * (maxPrompt - minPrompt)) + minPrompt;
let anwser = 0;
let lives =  4;


while (anwser != correctAnswer){
    anwser = prompt("guess a number!");
    if (anwser != correctAnswer){
        alert("That was not the right number" + "  You have " + lives + " lives left!");
        lives--
    } else if (anwser == correctAnswer){
        alert("Great job you have guessed the number. You win!")
    }

    if (lives < 0){
        alert("Game over " + name +  " :< See you next time");
        break;
    }

}

