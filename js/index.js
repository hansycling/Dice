//generate random numbers for two dices
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
//set attribute content
var img1 = "images/dice"+ randomNumber1 +".png";
var img2 = "images/dice"+ randomNumber2 +".png";
//use querySelector to set attribute
document.querySelector(".img1").setAttribute("src", img1);
document.querySelector(".img2").setAttribute("src", img2);

//set the h1 tittle result
if (randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML = "Draw!";
}
else if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins.";
}
else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 wins. 🚩";
}
