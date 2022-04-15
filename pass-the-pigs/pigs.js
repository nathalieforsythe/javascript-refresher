let playerNum = 0;
const pigs = ['Dot', 'No Dot', 'Razorback', 'Trotter', 'Snouter', 'Leaning Jowler'];

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

function roll() {
    setPig();
    calcHandScore();
}

function pass() {
    changeBackground();
}

function setPig(id) {
    let pig1text = document.getElementById('player' + playerNum + 'Pig1');
    let pig2text = document.getElementById('player' + playerNum + 'Pig2');

    let pig1 = Math.floor(Math.random() * (pigs.length - 1));
    let pig2 = Math.floor(Math.random() * (pigs.length - 1));

    pig1text.innerHTML = pigs[pig1];
    pig2text.innerHTML = pigs[pig2];

    if ((pig1text.innerHTML === 'Dot' && pig2text.innerHTML === 'No Dot') || (pig1text.innerHTML === 'No Dot' && pig2text.innerHTML === 'Dot')) {
        pigOut();
    }
}

function pigOut() {
    let handScore = document.getElementById('player' + playerNum + 'HandScore');
    handScore.innerHTML = 'PIG OUT!'
    changeBackground();
}

function calcHandScore() {
    let score = 0;

    
}

function calcTotalScore() {
    let totalScore = 0;
}