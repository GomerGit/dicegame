var randomNumber1 = Math.floor(Math.random()*6)+1; //creates random number for dice1
var randomDice1 = "images/dice" + randomNumber1 + ".png" //creates the internal source fordice1
document.querySelectorAll("img")[0].setAttribute("src", randomDice1);

var randomNumber2 = Math.floor(Math.random()*6)+1; //creates random number for dice1
var randomDice2 = "images/dice" + randomNumber2 + ".png" //creates the internal source fordice1
document.querySelectorAll("img")[1].setAttribute("src", randomDice2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = ("Player 1 wins!");
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = ("Player 2 Wins!");
}
else {
  document.querySelector("h1").innerHTML = ("Draw!");
}