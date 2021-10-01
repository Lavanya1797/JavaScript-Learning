'use strict';
/*console.log(document.querySelector('.message').textContent);// textContent is to get the content in message
document.querySelector('.message').textContent='Correct number';

document.querySelector('.score').textContent='10';

// to get number from element use .value instead of .textContent
document.querySelector('.guess').value=23;
*/
const secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore=0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message; //likethis we can refactor(reusable function) score,number where we repeatedly use
}
document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value); // whenever u get anything from input field its always a string we need to convert it to number
    console.log(guess,typeof guess);

if (!guess){
    //document.querySelector('.message').textContent='No number';
    displayMessage('No number');
    document.querySelector('body').style.backgroundColor='#22680d';
} 
else if (guess!= secretNumber){
    if(score>1){
        //document.querySelector('.message').textContent=guess>secretNumber ? 'Higher Number' : 'Low Number';
        displayMessage(guess>secretNumber ? 'Higher Number' : 'Low Number');
        score = score - 1;
        document.querySelector('.score').textContent= score;
        }else{
            document.querySelector('.message').textContent='You lost the game';
            document.querySelector('.score').textContent= 0;
        }
    }
    
    else if(guess===secretNumber){
   //document.querySelector('.message').textContent='Correct number';
   displayMessage('Correct number');
   document.querySelector('body').style.backgroundColor='#41d315';
   document.querySelector('.number').style.width = '30rem';
   document.querySelector('.number').textContent = secretNumber;
   if(score>highscore){
       highscore=score;
       document.querySelector('.highscore').textContent= highscore;
   }
} });

// here is just example of developing code with repetition so to avoid repetition use above code instead of this

//     else if (guess > secretNumber){
//     if(score>1){
//     document.querySelector('.message').textContent='Higher Number';
//     score = score - 1;
//     document.querySelector('.score').textContent= score;
//     }else{
//         document.querySelector('.message').textContent='You lost the game';
//         document.querySelector('.score').textContent= 0;
//     }
// }else if (guess<secretNumber){
//     if(score>1){
//         document.querySelector('.message').textContent='Lower Number';
//         score = score - 1;
//         document.querySelector('.score').textContent= score;
//         }else{
//             document.querySelector('.message').textContent='You lost the game';
//             document.querySelector('.score').textContent= 0;
//         }
// }
// reason for having again button is we can keep our highscore..if we reload the page then highscore will lost and it become 0 thats the reason for having again

document.querySelector('.again').addEventListener('click',function(){
    const secretNumber = Math.trunc(Math.random()*20)+1;
    score = 20;
    //document.querySelector('.message').textContent='Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor='black';
    document.querySelector('.score').textContent= score;
    document.querySelector('.number').textContent= '?';
    document.querySelector('.guess').value='';

});


    