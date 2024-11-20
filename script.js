const cards = document.querySelectorAll('.memory-card');

//function
function flipCard(){
    this.classList.toggle('flip');
}
//attach an event listening (click) that will excetute a function when clicked
cards.forEach(card => card.addEventListener('click', flipCard));