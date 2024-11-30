const cards = document.querySelectorAll('.memory-card');

//scoring
let score = 0;
let scoreCounter;

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard; //declaring the card variables
//functions
let matchedCards = 0;
let totalCards = cards.length

//countdown
let countdown;
let timeLeft = 60;
function startCountdown(){
    const timerElement = document.getElementById('timer')
    clearInterval(countdown);

    //start countdown
    countdown=setInterval(()=>{
        if(timeLeft<=0){
            clearInterval(countdown)
            alert("GAME OVER!");
            location.reload();
        }else{
            timerElement.textContent=timeLeft;
            timeLeft--;
        }
    }, 1000) //updates every second 
}

window.onload=function(){
    startCountdown();
};

//to start game

function flipCard(){
    if (lockBoard) return; //if true, the function is exited immediatly -> preventing further flipping
    if (this === firstCard) return;

    this.classList.add('flip');
//checking if its the first or second card the user picks
    if(!hasFlippedCard){
    //first click
        hasFlippedCard = true;
        firstCard=this;
    //console.log({hasFlippedCard, firstCard}) 
        return;
    }
    //2nd click
    secondCard=this;
    checkForMatch();
    
}

function checkForMatch(){
    //do cards match?
    if (firstCard.dataset.framework === secondCard.dataset.framework){
        //it matches
        disableCards();
        matchedCards += 2;
        updatePoints(10);
        checkForWin();
        
        }
        else { //not a match
            unflipCards();

    }
    console.log(matchedCards)
}
function disableCards(){
    //if its a match
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}
function unflipCards(){
    //not a match, so it unflips itself
    lockBoard=true;
    setTimeout(() =>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        
        resetBoard();
    }, 1500);
}
function resetBoard() { //resets the board after two picks, preventing double click
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}
function checkForWin(){
    if (matchedCards === totalCards){
        clearInterval(countdown);
        points = timeLeft * 2
        updatePoints(points)
        setTimeout(() =>{
            alert(`Congrats Senpai!  You Match all the cards! Score: ${score}`);
            location.reload();
        }, 500);
    }

}
//score function
function updatePoints(points) {
    score+=points;
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `Score: ${score}`;
}
//function where each card is assigned an number 
    (function shuffle (){
     cards.forEach(cards => {
        let randomPos = Math.floor(Math.random() * 12) 
        cards.style.order = randomPos;
     });
 })(); //wrap to immediatly invoke it 


//attach an event listening (click) that will excetute a function when clicked
cards.forEach(card => card.addEventListener('click', flipCard));