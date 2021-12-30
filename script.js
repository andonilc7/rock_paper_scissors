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

function playRound (playerSelection, computerSelection){
  
  

  if (playerSelection=='rock'&&computerSelection=='scissors'){
    playerScore++;
    return 'You win this round! Rock beats scissors.';
  } 
  else if (playerSelection=='scissors'&& computerSelection=='paper'){
    playerScore++
    return 'You win this round! Scissors beats paper.';
  } 
  else if (playerSelection=='paper'&& computerSelection=='rock'){
    playerScore++;
    return 'You win this round! Paper beats rock.';
  }
  else if (computerSelection=='rock'&&playerSelection=='scissors'){
    cpuScore++;
    return 'You lose this roun. Rock beats scissors.';
  } 
  else if (computerSelection=='scissors'&& playerSelection=='paper'){
    cpuScore++;
    return 'You lose this round. Scissors beats paper.';
  } 
  else if (computerSelection=='paper'&& playerSelection=='rock'){
    cpuScore++;
    return 'You lose this round. Paper beats rock.';
  }
  else {
    return "Tie";
  }
}

let p1;
let computer1;;




function game(){
  
  while (playerScore<3 && cpuScore<3){
    p1=prompt("Choose rock, paper, or scissors");
    computer1 = computerPlay();
    let score = playRound(p1, computer1);
    console.log(score);
  }


  if (playerScore>=3){
    return 'You win!';
  }
  else {
    return "You lose. Better luck next time";
  }
  
}

console.log(game());
