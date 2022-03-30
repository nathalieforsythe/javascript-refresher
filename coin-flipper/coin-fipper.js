flipCoin(100);
trackHeads(100);

function flipCoin(numFlips) {
    let heads = 0;
    for (let i = 0; i < numFlips; i++) {
        if (Math.random() < 0.5 ? 0 : 1) {
            heads++;
        }
    }
    // console.log('Out of ' + numFlips + ' you got ' + heads + ' heads.');
    return heads;
}

function trackHeads(numRuns) { 
    let runs = [];
    for(let i = 0; i < numRuns; i++){
        let numHeads = flipCoin(100);
        runs.push(numHeads);
    }

    let sum = 0;
    for (let i = 0; i < runs.length; i++) {
        sum += runs[i];
    }

    console.log('Average heads: ' + (sum / runs.length));
    console.log('Maximum heads: ' + Math.max(...runs));
    console.log('Minimum heads: ' + Math.min(...runs));
}