var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png-dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - dice6.png

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber2 + ".png"; //dice1.png-dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - dice6.png

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImageSource);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}
else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩It's a Tie!🚩"
}
