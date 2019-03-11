/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

var scores, roundScore, activePlayer, gamePlaying, prevRollSix, userDefinedScore, finalScore;

var defaultFinalScore = 20;
var finalScore_value = document.querySelector('.final-score--value');

init();


// ROLL BUTTON
document.querySelector('.btn-roll').addEventListener('click', function(){

    if(gamePlaying) {
        //Random number on dice
        var dice1 = Math.floor(Math.random()*6) + 1;
        var dice2 = Math.floor(Math.random()*6) + 1;

        //Display the result
        var dice1DOM = document.getElementById('dice-1'); 
        var dice2DOM = document.getElementById('dice-2'); 

        dice1DOM.style.display = 'block';
        dice2DOM.style.display = 'block';
        dice1DOM.src = 'dice-'+ dice1 + '.png';
        dice2DOM.src = 'dice-'+ dice2 + '.png';


        //Update round score IF the role was NOT a 1
        if (dice1 !== 1 && dice2 !== 1) {
            
            /*
            if(dice === 6 && prevRollSix === false) { //First 6
                prevRollSix = true;

                //Ads score
                roundScore += dice;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;

            } else if(dice === 6 && prevRollSix === true){ // Second 6 in a row

                scores[activePlayer] = 0; //GLOBAL Score set to 0
                document.querySelector('#score-'+ activePlayer).textContent = 0; // Display score
                nextPlayer();

            }else { // First 6, second roll different number

                prevRollSix = false;
                //Ads score
                roundScore += dice;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            }
            */  
           
            //Ads score
            roundScore += (dice1 + dice2);
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        } else { //Rolled 1
            //Next player
            nextPlayer();            
        }        
    }   

});

//HOLD BUTTON
document.querySelector('.btn-hold').addEventListener('click', function() {
    
    if(gamePlaying) {
        //Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;
        //Update the UI
        document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];

        //prevRollSix = false; // Reseting six rolled

        //Check if player won the game
        if (scores[activePlayer] >= finalScore){
            document.querySelector('#name-'+ activePlayer).textContent ='Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

            gamePlaying = false;

        } else {
            //Next player
            nextPlayer();
        }
    }   

});

// NEW GAME BUTTON
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    prevRollSix = false;

    userDefinedScore = document.querySelector('.final-score').value;
    finalScore_value.textContent = finalScore; 

    if(isNaN(userDefinedScore) || userDefinedScore <= 1) { 
        //Use default
        finalScore = defaultFinalScore; 
    } else {
        //Use defined
        finalScore = userDefinedScore;        
    }

    finalScore_value.textContent = finalScore; 

    
    //DICES NOT DISPLAYED AT THE BEGINNING
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent ='Player 1';
    document.getElementById('name-1').textContent ='Player 2'; 
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
}

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    prevRollSix = false;

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    //Toggle active player 
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //Hide dices
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}