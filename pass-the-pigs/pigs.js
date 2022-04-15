let playerNum = 0;
// const pigs = ['Dot', 'No Dot', 'Razorback', 'Trotter', 'Snouter', 'Leaning Jowler'];

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
}

function roll() {
    setPig();
    // calcHandScore();
}

function pass() {
    changeBackground();
}

function setPig(id) {
    let pig1text = document.getElementById('player' + playerNum + 'Pig1');
    let pig2text = document.getElementById('player' + playerNum + 'Pig2');
    let pig1 = probability();
    let pig2 = probability();

    pig1text.innerHTML = pig1;
    pig2text.innerHTML = pig2;

    if ((pig1 === 'Dot' && pig2 === 'No Dot') || (pig1 === 'No Dot' && pig2 === 'Dot')) {
        pigOut();
    }
}

function probability() {
    if (Math.random() <= 0.349) {
        return 'Dot';
    } else if (Math.random() > 0.349 || Math.random() <= 0.651) {
        return 'No Dot';
    } else if (Math.random() > 0.651 || Math.random() <= 0.875) {
        return 'Razorback';
    } else if (Math.random() > 0.875 || Math.random() <= 0.963) {
        return 'Trotter';
    } else if (Math.random() > 0.963 || Math.random() <= 0.993) {
        return 'Snouter';
    } else {
        return 'Leaning Jowler';
    }
}

// scoring isn't working
function calcHandScore() {
    let handScore = 0;
    let handScoreText = document.getElementById('player' + playerNum + 'HandScore');
    
    if (pig1 === 'Leaning Jowler' && pig2 === 'Leaning Jowler') {
        handScore += 60;
    } else if (pig1 === 'Snouter' && pig2 === 'Snouter') {
        handScore += 40;
    } else if (pig1 === 'Trotter' && pig2 === 'Trotter') {
        handscore += 20;
    } else if (pig1 === 'Razorback' && pig2 === 'Razorback') {
        handscore += 20;
    } else if (pig1 === 'Dot' && pig2 === 'Dot') {
        handscore += 1;
    } else if (pig1 === 'No Dot' && pig2 === 'No Dot') {
        handscore += 1;
    } else {
        if (pig1 === 'Leaning Jowler' || pig2 == 'Leaning Jowler') {
            handScore += 15;
        }
        if (pig1 === 'Snouter' || pig2 === 'Snouter') {
            handScore += 10;
        }
        if (pig1 === 'Trotter' || pig2 === 'Trotter') {
            handScore += 5;
        }
        if (pig1 === 'Razorback' || pig2 === 'Razorback') {
            handScore += 5;
        }
    }
    handScoreText.innerHTML = 'Score: ' + handScore;
}

function pigOut() {
    let handScore = document.getElementById('player' + playerNum + 'HandScore');
    handScore.innerHTML = 'PIG OUT!'
    changeBackground();
}

function changeBackground() {
    let playerId = document.getElementById('player' + playerNum);
    playerId.setAttribute('class', 'w3-card w3-container w3-light-gray w3-round-large');
    playerNum++;

    if (playerNum > 3) {
        playerNum = 0;
    }

    playerId = document.getElementById('player' + playerNum);
    playerId.setAttribute('class', 'w3-card w3-container w3-dark-gray w3-round-large');
}