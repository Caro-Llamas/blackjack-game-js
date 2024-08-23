let firstCard = 6;
let secondCard = 3;
let hasBlackjack = false;
let isAlive = true;
let message = "";

let sum = firstCard + secondCard;
let messageEl = document.querySelector(".message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

function startGame(){
    sumEl.textContent = `Sum: ${sum}`;
    cardsEl.textContent = `Cards: ${firstCard} ${secondCard}`
    if(sum <= 20){
        message = "Do you want to draw another card?";
    } else if (sum === 21){
        message = "You've got BlackJack!";
        hasBlackjack = true;
    } else {
        message = "You have lost! Sowwy...";
        isAlive = false;
    }
    
    messageEl.textContent = message;
}

function newCard(){
    document.querySelector("#new-card-el").textContent = `Drawing a new card!`;
    let newCard = 5;
    sum = sum + newCard;
    
    startGame();
}


