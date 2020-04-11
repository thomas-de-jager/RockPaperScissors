var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("userscore")
const computerScore_span = document.getElementById("compscore")
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rr":
            draw(userChoice, computerChoice);
            break;
        case "rp":
            lose(userChoice, computerChoice);
            break;
        case "rs":
            win(userChoice, computerChoice);
            break;
        case "pr":
            win(userChoice, computerChoice);
            break;
        case "pp":
            draw(userChoice, computerChoice);
            break;
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function convertToWord(letter){
    switch(letter){
        case "r":
            return "Rock"
            break;
        case "p":
            return "Paper"
            break;
        case "s":
            return "Scissors"
            break;
    }
}

function win(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = convertToWord(userChoice).bold() + " beats " + convertToWord(computerChoice).bold() + " you win!";
    userChoice_div.classList.add('greenGlow');
    setTimeout(function(){userChoice_div.classList.remove('greenGlow');}, 300);
}

function lose(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice).bold() + " loses to " + convertToWord(computerChoice).bold() + " you lose!";
    userChoice_div.classList.add('redGlow');
    setTimeout(function(){userChoice_div.classList.remove('redGlow');}, 300);
}

function draw(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = convertToWord(userChoice).bold() + " equals " + convertToWord(computerChoice).bold() + " it's a draw!";
    userChoice_div.classList.add('greyGlow');
    setTimeout(function(){userChoice_div.classList.remove('greyGlow');}, 300);
}

function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    })

    paper_div.addEventListener('click', function(){
        game("p");
    })

    scissors_div.addEventListener('click', function(){
        game("s");
    })
}

main();
