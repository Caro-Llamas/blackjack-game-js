let cards = [];
let hasBlackjack = false;
let isAlive = false;
let message = "";
let sum = 0;



let messageEl = document.querySelector(".message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1;
    if(randomNumber === 1){
        return 11;
    } else if(randomNumber > 10){
        return 10;
    } else {
        return randomNumber;
    }
}

function startGame(){
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    isAlive = true;
    sum = firstCard + secondCard;
    renderGame();
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

    if(isAlive && !hasBlackjack){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    document.querySelector("#new-card-el").textContent = `Drawing a new card!`;
    let newCard = getRandomCard();
    cards.push(newCard);
    sum = sum + newCard;
    
    renderGame();
}


