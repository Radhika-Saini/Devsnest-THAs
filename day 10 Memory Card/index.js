const cards=document.querySelectorAll('.memory-card');
const UIscore=document.querySelector('.score');
const UImoves=document.querySelector('.moves');

cards.forEach(card =>{
    card.addEventListener('click',flipCard);
});

let hasClickedCard=false;
let lockboard=false;
let score=0;
let move=0;
let firstCard,secondCard;

UImoves.textContent=`Moves: ${move}`;
UIscore.textContent=`Score: ${score}`;

function flipCard(){
    if(lockboard)return;
    if(this===firstCard)return;
    this.classList.add('flip');
    if(!hasClickedCard){
        hasClickedCard=true;
        firstCard=this;
    }
    else{
        hasClickedCard=false;
        secondCard=this;
        checkForMatch();
    }
}

function checkForMatch(){
    let isMatch=firstCard.dataset.img===secondCard.dataset.img;
    isMatch? removeCards(): unflipCards();
}

function removeCards(){
    lockboard=true;
    score+=5;
    move++;
    setTimeout(()=>{
        firstCard.innerHTML="";
        secondCard.innerHTML="";
        UImoves.textContent=`Moves: ${move}`;
        UIscore.textContent=`Score: ${score}`;
        resetBoard();
    },1200)
}

function unflipCards(){
    lockboard=true;
    move++;
    setTimeout(()=>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        UImoves.textContent=`Moves: ${move}`;
        UIscore.textContent=`Score: ${score}`;
        resetBoard();
    },1200)
}

function resetBoard(){
    [hasClickedCard,lockboard]=[false,false];
    [firstCard,secondCard]=[null,null];
}

(function shuffle(){
    cards.forEach(card=>{
        let randomPos=Math.floor(Math.random()*16);
        card.style.order=randomPos;
    })
})();
