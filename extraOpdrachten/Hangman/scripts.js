// Gebruiker heeft 5 kansen om letters te raden.
// Het programma kiest een random woord uit een array van woorden
// als gebruiken kan ik een letter of het woorden invoeren via een inputfield

// Array galgje woorden.
const woordenLijst =['cavia','krukje','tijd','fors','sambal','zuivel','kritisch','jasje','giga','dieren','lepel','picknick','quasi','verzenden','winnaar','dextrose','vrezen','niqaab','hierbij','quote','botox','cruciaal','zitting','cabaret','bewogen' ,'vrijuit','carrière','ijverig','cake','dyslexie','uier','nihil','sausje','kuuroord','poppetje','docent','camping','schijn','kloppen','detox','boycot','cyclus','quiz','censuur','aaibaar','chagrijnig','fictief','chef','gering','nacht','cacao','triomf','baby','ijstijd','cruisen','ontzeggen','quad','open','turquoise','carnaval','boxer','straks','fysiek','accu','twijg','quote','gammel','flirt','futloos','vreugde','ogen','geloof','periode','volwaardig','uitleg','stuk','volk','even','stijl','val','alliantie','tocht','mooi','joggen','broek','kwik','werksfeer','vorm','nieuw','sopraan','miljoen','inrichting','klacht','dak','echt','schikking','print','oorlog','zijraam','hyacint'];
let randomWord = woordenLijst[Math.round(Math.random() * (woordenLijst.length - 1)) + 1];
const formWrapper = document.getElementById('form-wrapper');
const button = document.getElementById('input-button');
let  guessedLetters = [];
let parsedWord = [];
let curGuessedLetter = '';
let chances = 5;
let spanArray = [];
let gameOver = false;

// FUNCTIONS

const winner = function(word){
    let winningWord = '';
    for (let i=0; i < word.length; i++){
        winningWord= winningWord +document.getElementById(`l${i}`).innerHTML ;
    } if (winningWord == randomWord){
        alert ("You won the game");
        gameOver = true;
    }
};

const letterSlotsGen = function(selectedWord){
    const letterSlots = document.getElementById('letter-slots');
    let spanList = '';
    // voor elke letter in selectedWord een span aan maken in letter slots
    for (let i=0; i< selectedWord.length; i++){
        spanList = spanList += `<span class="slot" id=l${i}>-</span>`;
    }

    // letter slots pushen naar de Paragraph
    letterSlots.innerHTML= spanList;
    const spanClassSelector = document.querySelectorAll('.slot');
    // Create array of spans for selecting the right letter slot
    Array.from(spanClassSelector).forEach (function(span){
        spanArray.push(span);
    });
};

const letterParser = function(selectedWord){
    for (let i=0; i < selectedWord.length; i++){
        parsedWord.push(selectedWord[i]);
    }
    letterSlotsGen(selectedWord);
};

// check if guessed letter is in the winning word
const checkLetter = function(){
    let rightLetter = false;
    // if guessed letter is in winning word parse it to the right letter slot
    for (let i=0; i< parsedWord.length; i++){
        if (curGuessedLetter === parsedWord[i]){
            spanArray[i].innerHTML = curGuessedLetter;
            rightLetter = true;
        }
    }
    // else if word is wrong remove a life 
    if (rightLetter === false){
        chances--;
        document.getElementById('lifeCount').innerHTML = chances;

    }
};
letterParser(randomWord);
button.onclick = function () {
    // fetch input value
    let input = document.getElementById('userGuess').value;
    guessedLetters.push(input);
    // stores current input letter
    curGuessedLetter = input;
    checkLetter();
    formWrapper.reset();//reset form
    if (chances === 0){
        alert("Game over! Try Again");
        // document.getElementById('gameState').innerHTML = "GAME OVER! try again."
        gameOver = true;
    }
    winner(randomWord);
    return gameOver;    // do not refresh page
};
    
console.log(randomWord);