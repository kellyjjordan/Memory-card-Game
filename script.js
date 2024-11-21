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

    console.log(firstCard.dataset.framework);
    console.log(secondCard.dataset.framework);
    }


}

//attach an event listening (click) that will excetute a function when clicked
cards.forEach(card => card.addEventListener('click', flipCard));