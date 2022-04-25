let playerNum = 0;
let pig1, pig2, score;
const playerScores = [player0 = { handScore: 0, totalScore: 0 }, player1 = { handScore: 0, totalScore: 0 }, player2 = { handScore: 0, totalScore: 0 }, player3 = { handScore: 0, totalScore: 0 }, player4 = { handScore: 0, totalScore: 0 }];

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
        } else if (id === 'replayButton') {
            location.reload(); // https://www.w3schools.com/jsref/met_loc_reload.asp
        }
    }

    computerPlayer();
}

function roll() {
    displayPigs();
    displayHandScore();
    win();
}

function pass() {
    displayTotalScore();
    disablePlayerButtons();
    changeBackground();
    enablePlayerButtons();
}

function displayPigs() {
    let pig1text = document.getElementById('player' + playerNum + 'Pig1');
    let pig2text = document.getElementById('player' + playerNum + 'Pig2');
    pig1 = setPig();
    pig2 = setPig();

    pig1text.innerHTML = pig1 + ' ';
    pig2text.innerHTML = pig2 + ' ';
    displayImages(pig1, pig1text);
    displayImages(pig2, pig2text);
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

// https://moonbooks.org/Articles/How-to-add-an-image-in-a-HTML-page-using-javascript-/
// https://www.w3schools.com/jsref/dom_obj_image.asp
function displayImages(pig, position) {
    let img = document.createElement('img');
    if (pig === 'Dot') {
        img.src = 'pig-pics/dot.png';
    } else if (pig === 'No Dot') {
        img.src = 'pig-pics/no-dot.jpeg';
    } else if (pig === 'Razorback') {
        img.src = 'pig-pics/razorback.png';
    } else if (pig === 'Trotter') {
        img.src = 'pig-pics/trotter.png';
    } else if (pig === 'Snouter') {
        img.src = 'pig-pics/snouter.png';
    } else {
        img.src = 'pig-pics/leaning-jowler.png';
    }
    img.width = 100;
    img.height = 100;
    position.appendChild(img);
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

    if (playerNum !== 4) {
        pigOut();
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
    handScoreText.innerHTML = 'Score: 0';
}

function pigOut() {
    if (score === 0) {
        let handScoreText = document.getElementById('player' + playerNum + 'HandScore');
        playerScores[playerNum].totalScore -= playerScores[playerNum].handScore;
        playerScores[playerNum].handScore = 0;
        handScoreText.innerHTML = 'PIG OUT!'
        disablePlayerButtons();
        changeBackground();
        enablePlayerButtons();
    }
}

function changeBackground() {
    let playerId = document.getElementById('player' + playerNum);
    playerId.setAttribute('class', 'w3-card w3-container w3-light-gray w3-round-large');
    playerNum++;

    if (playerNum > 4) {
        playerNum = 0;
    }

    playerId = document.getElementById('player' + playerNum);
    playerId.setAttribute('class', 'w3-card w3-container w3-dark-gray w3-round-large');
}

function win() {
    if (playerScores[playerNum].totalScore >= 100) {
        let playerId = document.getElementById('player' + playerNum);
        playerId.setAttribute('class', 'w3-card w3-container w3-yellow w3-round-large');

        let replayId = document.getElementById('replay');
        replayId.setAttribute('class', 'w3-row w3-container w3-show')

        disableAllButtons();
    }
}

// https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp
function enablePlayerButtons() {
    document.getElementById('player' + playerNum + 'RollButton').disabled = false;
    document.getElementById('player' + playerNum + 'PassButton').disabled = false;
}

function disablePlayerButtons() {
    document.getElementById('player' + playerNum + 'RollButton').disabled = true;
    document.getElementById('player' + playerNum + 'PassButton').disabled = true;
}

function disableAllButtons() {
    for (let i = 0; i < 5; i++) {
        document.getElementById('player' + i + 'RollButton').disabled = true;
        document.getElementById('player' + i + 'PassButton').disabled = true;
    }
}

// I couldn't figure out how to get it to wait in between rolls, so check the console to see each roll
function computerPlayer() {
    if (playerNum === 4) {
        if (player4.totalScore <= 25) {
            while (player4.handScore < 15) {
                displayPigs();
                displayHandScore();
                console.log(pig1, pig2);

                setTimeout(pigOut, 1000);
                if (player4.handScore === 0) {
                    console.log('turn finished');
                    return; // stops the loops from resetting if player4 pigs out
                }
            }
        } else if (player4.totalScore <= 75 || player4.totalScore > 25) {
            while (player4.handScore < 25) {
                displayPigs();
                displayHandScore();
                console.log(pig1, pig2);

                setTimeout(pigOut, 1000);
                if (player4.handScore === 0) {
                    console.log('turn finished');
                    return;
                }
            }
        } else {
            while (player4.handScore < 20) {
                displayPigs();
                displayHandScore();
                console.log(pig1, pig2);

                setTimeout(pigOut, 1000);
                if (player4.handScore === 0) {
                    console.log('turn finished');
                    return;
                } else if (player4.totalScore >= 100) {
                    win();
                    return; // stops the game from continuing after player4 wins
                }
            }
        }
        console.log('turn finished');
        setTimeout(pass, 1000);
    }
}