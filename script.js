const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let firstCard, secondCard; //declaring the card variables
//function
function flipCard(){
    this.classList.toggle('flip');
//checking if its the first or second card the user picks
if(!hasFlippedCard){
    //first click
    hasFlippedCard = true;
    firstCard=this;
    //console.log({hasFlippedCard, firstCard}) 
} else {
    //2nd click
    hasFlippedCard = false;
    secondCard=this;
    checkForMatch();
    }
}

function checkForMatch(){
    //do cards match?
    if (firstCard.dataset.framework === secondCard.dataset.framework){
        //it matches
        disableCards();
        }
        else { //not a match
            unflipCards();

    }
}
function disableCards(){
    //if its a match
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', secondCard);
}
function unflipCards(){
    //not a match, so it unflips itself
    setTimeout(() =>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 1500);
}
//attach an event listening (click) that will excetute a function when clicked
cards.forEach(card => card.addEventListener('click', flipCard));