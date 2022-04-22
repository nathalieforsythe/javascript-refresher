let playerNum = 0;
let pig1, pig2, score;
const playerScores = [player0 = { handScore: 0, totalScore: 0 }, player1 = { handScore: 0, totalScore: 0 }, player2 = { handScore: 0, totalScore: 0 }, player3 = { handScore: 0, totalScore: 0 }];

disableAllButtons();
enablePlayerButtons();

function handleClick(id) {
    const rollButtons = ['player0RollButton', 'player1RollButton', 'player2RollButton', 'player3RollButton'];
    const passButtons = ['player0PassButton', 'player1PassButton', 'player2PassButton', 'player3PassButton'];

    for (let button in rollButtons) {
        if (id === rollButtons[button]) {
            roll();
        } else if (id === passButtons[button]) {
            pass();
        }
    }

    // don't know whether this would go in or out of the loop
    // if id === replay -> replay()
}

function roll() {
    displayPigs();
    displayHandScore();
    win();
}

function pass() {
    displayTotalScore();
    disablePlayerButtons(); // check this
    changeBackground();
}

function displayPigs() {
    let pig1text = document.getElementById('player' + playerNum + 'Pig1');
    let pig2text = document.getElementById('player' + playerNum + 'Pig2');
    pig1 = setPig();
    pig2 = setPig();

    pig1text.innerHTML = pig1;
    pig2text.innerHTML = pig2;
}

function setPig() {
    let randomNum = Math.random();
    if (randomNum <= 0.349) {
        return 'Dot';
    } else if (randomNum > 0.349 && randomNum <= 0.651) {
        return 'No Dot';
    } else if (randomNum > 0.651 && randomNum <= 0.875) {
        return 'Razorback';
    } else if (randomNum > 0.875 && randomNum <= 0.963) {
        return 'Trotter';
    } else if (randomNum > 0.963 && randomNum <= 0.993) {
        return 'Snouter';
    } else {
        return 'Leaning Jowler';
    }
}

function displayHandScore() {
    let handScoreText = document.getElementById('player' + playerNum + 'HandScore');

    if (pig1 === pig2) {
        score = calcHandScore();
    } else {
        let pig1Score = calcHandScore(pig1);
        let pig2Score = calcHandScore(pig2);
        score = pig1Score + pig2Score;
    }

    playerScores[playerNum].handScore += score;
    playerScores[playerNum].totalScore += score;
    handScoreText.innerHTML = 'Score: ' + playerScores[playerNum].handScore;

    // pig out
    if (score === 0) {
        playerScores[playerNum].totalScore -= playerScores[playerNum].handScore;
        playerScores[playerNum].handScore = 0;
        handScoreText.innerHTML = 'PIG OUT!'
        disablePlayerButtons(); // check this
        changeBackground();
    }
}

function calcHandScore(pig) {
    if (pig1 === 'Leaning Jowler' && pig2 === 'Leaning Jowler') {
        return 60;
    } else if (pig1 === 'Snouter' && pig2 === 'Snouter') {
        return 40;
    } else if ((pig1 === 'Trotter' && pig2 === 'Trotter') || (pig1 === 'Razorback' && pig2 === 'Razorback')) {
        return 20;
    } else if ((pig1 === 'Dot' && pig2 === 'Dot') || (pig1 === 'No Dot' && pig2 === 'No Dot')) {
        return 1;
    } else if ((pig === 'Dot' && pig2 === 'No Dot') || (pig1 === 'No Dot' && pig2 === 'Dot')) {
        return 0;
    } else if (pig === 'Leaning Jowler') {
        return 15;
    } else if (pig === 'Snouter') {
        return 10;
    } else if (pig === 'Trotter' || pig === 'Razorback') {
        return 5;
    } else if (pig === 'Dot' || pig === 'No Dot') {
        return 0;
    }
}

function displayTotalScore() {
    let totalScoreText = document.getElementById('player' + playerNum + 'TotalScore');
    let handScoreText = document.getElementById('player' + playerNum + 'HandScore');

    playerScores[playerNum].handScore = 0;
    totalScoreText.innerHTML = 'Total score: ' + playerScores[playerNum].totalScore;
    handScoreText.innerHTML = 'Score: ' + playerScores[playerNum].handScore; // replace w/ 0 when done testing
}

function changeBackground() {
    let playerId = document.getElementById('player' + playerNum);
    playerId.setAttribute('class', 'w3-card w3-container w3-light-gray w3-round-large');
    playerNum++;

    enablePlayerButtons();

    if (playerNum > 3) {
        playerNum = 0;  
        enablePlayerButtons(); // does not enable player0 buttons
    }

    playerId = document.getElementById('player' + playerNum);
    playerId.setAttribute('class', 'w3-card w3-container w3-dark-gray w3-round-large');
}

function win() {
    if (playerScores[playerNum].totalScore >= 100) { // increase to 100 when all of this works
        let playerId = document.getElementById('player' + playerNum);
        playerId.setAttribute('class', 'w3-card w3-container w3-yellow w3-round-large');

        let replayId = document.getElementById('replay');
        replayId.setAttribute('class', 'w3-row w3-container w3-show')

        disableAllButtons();
    }
}

function enablePlayerButtons() {
    document.getElementById('player' + playerNum + 'RollButton').disabled = false;
    document.getElementById('player' + playerNum + 'PassButton').disabled = false;
}

function disablePlayerButtons() {
    document.getElementById('player' + playerNum + 'RollButton').disabled = true;
    document.getElementById('player' + playerNum + 'PassButton').disabled = true;
}

function disableAllButtons() {
    for (let i = 0; i < 4; i++) {
        document.getElementById('player' + i + 'RollButton').disabled = true;
        console.log(i + ' disabled roll')
        document.getElementById('player' + i + 'PassButton').disabled = true;
    }
}

function replay() {
    console.log('reset')
}