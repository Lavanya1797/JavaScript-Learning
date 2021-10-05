'use strict';

// selecting elements 
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

let scores,currentScore,activePlayer,playing; // just declared variables withput values

const init = function(){     // init stands for initialization we can use any names here
    
    scores = [0,0];
    currentScore = 0; //its declared outside loop bcz if its inside loop then on each click currentscore sets to 0
    activePlayer = 0;
    playing = true;
    
    score0El.textContent = 0;
    score1El.textContent=0;
    current0El.textContent=0;
    current1El.textContent=0;
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active'); // here we added active bcz player 0 is first active player
    player1El.classList.remove('player--active');

};
init();   // we have to call this func otherwise it doesn't work
const switchPlayer  = function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
    currentScore=0;
    activePlayer = activePlayer===0 ? 1:0;
    player0El.classList.toggle('player--active'); //it removes player--active class from player0
    player1El.classList.toggle('player--active'); // it adds player--active class to player1
}  // use of toggle is to add the class if its not thr and removes it if its thr


btnRoll.addEventListener('click',function(){
    if(playing){      // here we didn't write any condition in if bcz playing is a boolean value
    const dice = Math.trunc(Math.random()*6)+1;
    
   // to display dice
   diceEl.classList.remove('hidden');
   diceEl.src = `dice-${dice}.png`;
  
   if(dice!==1){
       currentScore+=dice;
       document.getElementById(`current--${activePlayer}`).textContent=currentScore;
   } else{
       //switch active player
        switchPlayer();
   }
}});

btnHold.addEventListener('click',function(){
    if(playing){
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
    if(scores[activePlayer]>=20){
        playing=false;
        diceEl.classList.add('hidden');
       document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
       document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else{
    switchPlayer();
    }
}
});

btnNew.addEventListener('click',init)