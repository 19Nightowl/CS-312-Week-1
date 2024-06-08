var play1Num = Math.floor(Math.random() * 6) + 1;
var play2Num = Math.floor(Math.random() * 6) + 1;

var image1 = "images/dice" + play1Num + ".png";
var image2 = "images/dice" + play2Num + ".png";

var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];
var container = document.querySelector("h1");

if(play1Num > play2Num)
    {
    container.innerHTML ="🚩 Player 1 Wins";
    }
else if(play1Num < play2Num)
    {
    container.innerHTML = "Player 2 Wins 🚩";
    }
else
    {
    container.innerHTML = "Draw";
    }

img1.setAttribute("src", image1);
img2.setAttribute("src", image2);
