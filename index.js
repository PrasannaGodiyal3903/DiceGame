var randomint1=Math.floor(Math.random()*6)+1;
var randomint2=Math.floor(Math.random()*6)+1;
var string1="dice"+randomint1+".png";
var string2="dice"+randomint2+".png";
document.querySelector(".img1").setAttribute("src","./images/"+string1);

document.querySelector(".img2").setAttribute("src","./images/"+string2);
if(randomint1>randomint2){
    document.querySelector("h1").innerHTML="Player 1 Wins!!";
}
else{
    document.querySelector("h1").innerHTML="Player 2 Wins!!";
}