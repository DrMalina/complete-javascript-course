/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gamePlaying, prevRollSix;

init();


// ROLL BUTTON
document.querySelector('.btn-roll').addEventListener('click', function(){

    if(gamePlaying) {
        //Random number on dice
        var dice = Math.floor(Math.random()*3)+4;

        //Display the result
        var diceDOM = document.querySelector('.dice');  
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-'+ dice + '.png';


        //Update round score IF the role was NOT a 1
        if (dice !== 1) {
            
            // Rolled 6
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
        if (scores[activePlayer] >= 20){
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
    
    //DICE NOT DISPLAYED AT THE BEGINNING
    document.querySelector('.dice').style.display = 'none';

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

    document.querySelector('.dice').style.display = 'none';
}