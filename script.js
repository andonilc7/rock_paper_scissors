function computerPlay (){
  let rand = Math.floor(Math.random()*3)+1;
  if (rand==1){
    
    return 'rock';
  } else if (rand==2){
    
    return 'paper';
  } else if (rand==3) {
    
    return 'scissors';
  }
  else{
    alert("problem");
    return 'problem';
  }
}

let playerScore=0;
  let cpuScore=0;

//computerAnimation function
function computerAnimation (computerSelection) {
  if (computerSelection==='rock'){
    cpuRock.classList.add('selected');
  } else if (computerSelection==='paper'){
    cpuPaper.classList.add('selected');
  } else if (computerSelection==='scissors'){
    cpuScissors.classList.add('selected');
  }
}
  

function playRound (playerSelection){
  const computerSelection = computerPlay();
  

  if (playerSelection=='rock'&&computerSelection=='scissors'){
    playerScore++;
    playerScoreDisplay.textContent = `You: ${playerScore}`;
    cpuScoreDisplay.textContent = `CPU: ${cpuScore}`;
    result.textContent =  'You win this round! Rock beats scissors.';
    score.textContent = `You  ${playerScore}-${cpuScore}  CPU`
  } 
  else if (playerSelection=='scissors'&& computerSelection=='paper'){
    playerScore++;
    playerScoreDisplay.textContent = `You: ${playerScore}`;
    cpuScoreDisplay.textContent = `CPU: ${cpuScore}`;
    result.textContent =  'You win this round! Scissors beats paper.';
    score.textContent = `You  ${playerScore}-${cpuScore}  CPU`
  } 
  else if (playerSelection=='paper'&& computerSelection=='rock'){
    playerScore++;
    playerScoreDisplay.textContent = `You: ${playerScore}`;
    cpuScoreDisplay.textContent = `CPU: ${cpuScore}`;
    result.textContent =  'You win this round! Paper beats rock.';
    score.textContent = `You  ${playerScore}-${cpuScore}  CPU`
  }
  else if (computerSelection=='rock'&&playerSelection=='scissors'){
    cpuScore++;
    playerScoreDisplay.textContent = `You: ${playerScore}`;
    cpuScoreDisplay.textContent = `CPU: ${cpuScore}`;
    result.textContent =  'You lose this round. Rock beats scissors.';
    score.textContent = `You  ${playerScore}-${cpuScore}  CPU`
  } 
  else if (computerSelection=='scissors'&& playerSelection=='paper'){
    cpuScore++;
    playerScoreDisplay.textContent = `You: ${playerScore}`;
    cpuScoreDisplay.textContent = `CPU: ${cpuScore}`;
    result.textContent =  'You lose this round. Scissors beats paper.';
    score.textContent = `You  ${playerScore}-${cpuScore}  CPU`
  } 
  else if (computerSelection=='paper'&& playerSelection=='rock'){
    cpuScore++;
    playerScoreDisplay.textContent = `You: ${playerScore}`;
    cpuScoreDisplay.textContent = `CPU: ${cpuScore}`;
    result.textContent =  'You lose this round. Paper beats rock.';
    score.textContent = `You  ${playerScore}-${cpuScore}  CPU`
  }
  else {
    result.textContent =  "Tie";
    playerScoreDisplay.textContent = `You: ${playerScore}`;
    cpuScoreDisplay.textContent = `CPU: ${cpuScore}`;
    score.textContent = `You  ${playerScore}-${cpuScore}  CPU`
  }

computerAnimation(computerSelection);

}



//DOM manipulation


const body = document.body;


const score = document.querySelector('#score');
score.textContent = `You  ${playerScore}-${cpuScore}  CPU`;

//setting playerScore display variable
const playerScoreDisplay = document.querySelector('#player-score-display');
playerScoreDisplay.textContent = `You: ${playerScore}`;
playerScoreDisplay.style.fontSize = '22px';


//setting player variables
const player = document.querySelector('.player');


const playerRock = document.querySelector('.player-rock');
playerRock.textContent = 'rock';

const playerPaper = document.querySelector('.player-paper');
playerPaper.textContent = 'paper';


const playerScissors = document.querySelector('.player-scissors');
playerScissors.textContent = 'scissors';


//setting cpuScore display variable
const cpuScoreDisplay = document.querySelector('#cpu-score-display');
cpuScoreDisplay.textContent = `CPU: ${cpuScore}`;
cpuScoreDisplay.style.fontSize = "22px";


//setting cpu variables
const cpu = document.querySelector('.cpu');

const cpuRock = cpu.querySelector('.cpu-rock');
cpuRock.textContent = 'rock';

const cpuPaper = document.querySelector('.cpu-paper');
cpuPaper.textContent = 'paper';


const cpuScissors = document.querySelector('.cpu-scissors');
cpuScissors.textContent = 'scissors';


//play button
const resultContainer = document.querySelector('.result-container');
const playButton = document.createElement('button');
playButton.classList.add('play-button');
playButton.textContent = "Restart";


//result variable
const result = document.createElement('div');
result.textContent = "And the match begins! First to 5 wins!";
resultContainer.append(result);
resultContainer.append(playButton);


//event listeners for player
playerRock.addEventListener('click', clickListen);
playerPaper.addEventListener('click', clickListen);
playerScissors.addEventListener('click', clickListen);





//playbutton event listener
playButton.addEventListener('click', function(){
  playerScore = 0;
  cpuScore = 0;
  result.textContent = "And the match begins! First to 5 wins!";
  score.textContent = `You  ${playerScore}-${cpuScore}  CPU`;
  playerScoreDisplay.textContent = `You: ${playerScore}`;
  cpuScoreDisplay.textContent = `CPU: ${cpuScore}`;
  playerRock.addEventListener('click', clickListen);
  playerPaper.addEventListener('click', clickListen);
  playerScissors.addEventListener('click', clickListen);
  playButton.textContent = "Restart";
});


//click listen function (contains playRound)
function clickListen(){
  console.log(this.textContent);
  playRound(this.textContent);
  this.classList.add('selected');
  if (playerScore===5){
    playerRock.removeEventListener('click', clickListen);
    playerPaper.removeEventListener('click', clickListen);
    playerScissors.removeEventListener('click', clickListen);
    result.textContent = "You win the match!";
    playButton.textContent = "Play Again";

  }
  else if (cpuScore===5){
    playerRock.removeEventListener('click', clickListen);
    playerPaper.removeEventListener('click', clickListen);
    playerScissors.removeEventListener('click', clickListen);
    result.textContent = "CPU wins the match.";
    playButton.textContent = "Play Again";
  }
}

//adding eventListener of transition end
playerRock.addEventListener('transitionend', removeTransition);
playerPaper.addEventListener('transitionend', removeTransition);
playerScissors.addEventListener('transitionend', removeTransition);
cpuRock.addEventListener('transitionend', removeTransition);
cpuPaper.addEventListener('transitionend', removeTransition);
cpuScissors.addEventListener('transitionend', removeTransition);
function removeTransition (e) {
  if (e.propertyName!=='transform'){
    return;
  }
  this.classList.remove('selected');
}




//hover
function hover () {
  this.classList.add('hover');
}

playerRock.addEventListener('mouseenter', hover);
playerPaper.addEventListener('mouseenter', hover);
playerScissors.addEventListener('mouseenter', hover);

//remove hover
playerRock.addEventListener('mouseleave', removeHover);
playerPaper.addEventListener('mouseleave', removeHover);
playerScissors.addEventListener('mouseleave', removeHover);

function removeHover (e){
  this.classList.remove('hover');
}

playButton.addEventListener('mouseenter', hover);
playButton.addEventListener('mouseleave', removeHover);