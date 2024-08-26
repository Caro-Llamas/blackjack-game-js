let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let hasBlackjack = false;
let isAlive = true;
let message = "";

let sum = firstCard + secondCard;
let messageEl = document.querySelector(".message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

function getRandomCard(){
    return Math.floor(Math.random()*11) + 1;
}


function renderGame(){
    sumEl.textContent = `Sum: ${sum}`;
    cardsEl.textContent = `Cards:`
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += ` ${cards[i]} `
    }
    
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
    let newCard = getRandomCard();
    cards.push(newCard);
    sum = sum + newCard;
    
    renderGame();
}


