'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); //this is fast
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;


const resetGame = function()
{
  activePlayer=0;
  currentScore = 0;
  scores = [0,0];
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
}

const fun = function()
{
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (dice != 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;

     
   
      
    //change later
  } else {
   
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    fun();
    
  }
});

btnHold.addEventListener('click',function()
{
    scores[activePlayer]+=currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    
    if(scores[activePlayer]>=25)
    {
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      

    }else{
      fun();
    }


    

});

btnNew.addEventListener('click',resetGame);