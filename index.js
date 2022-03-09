var diceImg = new Array("images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png");
function diceRand(){
    // For img1
    var diceGame = Math.floor(Math.random() * diceImg.length);
    document.querySelector("img.img1").src = diceImg[diceGame];
    // For img2
    var mygame = Math.floor(Math.random() * diceImg.length);
    document.querySelector("img.img2").src = diceImg[mygame];
    // Draw
    if (diceGame === mygame) {
        document.querySelector(".container h1").innerText = "It's a draw";
    }
    // Player 1 wins
    else if (diceGame > mygame ){
        document.querySelector(".container h1").innerText = "Player 1 wins";
    }
    // Player 2 wins
    else {
        document.querySelector(".container h1").innerText = "Player 2 wins";
    }
}