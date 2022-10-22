function play(str) {
    let displayField = document.getElementById("display");

    

    if (str === "q" || str === "Q") {
        displayField.innerHTML = "Chord-1";
    } else if (str === "w" || str === "W") {
        displayField.innerHTML = "Chord-2";
    } else if (str === "e" || str === "E") {
        displayField.innerHTML = "Chord-3";
    } else if (str === "a" || str === "A") {
        displayField.innerHTML = "Shaker";
    } else if (str === "s" || str === "S") {
        displayField.innerHTML = "Open-HH";
    } else if (str === "d" || str === "D") {
        displayField.innerHTML = "Closed-HH";
    } else if (str === "z" || str === "Z") {
        displayField.innerHTML = "Punchy-Kick";
    } else if (str === "x" || str === "X") {
        displayField.innerHTML = "Side-Stick";
    } else if (str === "c" || str === "C") {
        displayField.innerHTML = "Snare";
    }
    
    var audio = document.getElementById(str);
    audio.play();
};

window.document.onkeyup = function(event) {
    let keystroke = event.key

    if (keystroke === "q" || keystroke === "Q") {
        play("Q");
    } else if (keystroke === "w" || keystroke === "W") {
        play("W");
    } else if (keystroke === "e" || keystroke === "E") {
        play("E");
    } else if (keystroke === "a" || keystroke === "A") {
        play("A");
    } else if (keystroke === "s" || keystroke === "S") {
        play("S");
    } else if (keystroke === "d" || keystroke === "D") {
        play("D");
    } else if (keystroke === "z" || keystroke === "Z") {
        play("Z");
    } else if (keystroke === "x" || keystroke === "X") {
        play("X");
    } else if (keystroke === "c" || keystroke === "C") {
        play("C");
    }
};


