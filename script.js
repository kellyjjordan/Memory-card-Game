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

    //do cards match?
    if (firstCard.dataset.framework === secondCard.dataset.framework){
        //it matches
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click',flipCard);
        }
        else { //not a match
            //setTimeout to allow time to see the 2nd card flip
            setTimeout(()=>{
                firstCard.classList.remove("flip");
                secondCard.classList.remove("flip");

            }, 1500);
            
        }
        console.log("function done")
    }


}

//attach an event listening (click) that will excetute a function when clicked
cards.forEach(card => card.addEventListener('click', flipCard));