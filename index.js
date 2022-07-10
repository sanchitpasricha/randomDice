var randomNumber1 = Math.random() * 6 +1;
randomNumber1 = Math.floor(randomNumber1);

var diceImage = "dice" + randomNumber1 + ".png";

var diceImagePath = "images/" + diceImage;

var leftImage = document.querySelectorAll("img")[0];
leftImage.setAttribute("src", diceImagePath);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var diceImagePath2 = "images/dice" + randomNumber2 + ".png";

var rightImage = document.querySelectorAll("img")[1].setAttribute("src", diceImagePath2);


if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "⛳️ Player 1 Wins";
}
else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "⛳️ Player 2 Wins";
}
else{
  document.querySelector("h1").innerHTML = "It's a Draw!";
}
