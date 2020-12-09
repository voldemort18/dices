
var g = (Math.floor(Math.random()*6))+1;
switch(g){
  case 1:
{
  document.querySelector("img").srcset= "images/dice1.png";
  break;
}
  case 2:
  {
    document.querySelector("img").srcset="images/dice2.png";
    break;
  }
  case 3:
  {
    document.querySelector("img").srcset="images/dice3.png";
    break;
  }
  case 4:
  {
    document.querySelector("img").srcset="images/dice4.png";
    break;
  }
  case 5:
  {
    document.querySelector("img").srcset="images/dice5.png";
    break;
  }
  case 6:
  {
    document.querySelector("img").srcset="images/dice6.png";
    break;
  }
}
var i = (Math.floor(Math.random()*6))+1;
switch(i){
  case 1:
  {
  document.querySelector("img.img2").srcset="images/dice1.png";
  break;
  }
  case 2:
  {
    document.querySelector("img.img2").srcset="images/dice2.png";
    break;
  }
  case 3:
  {
    document.querySelector("img.img2").srcset="images/dice3.png";
    break;
  }
  case 4:
  {
    document.querySelector("img.img2").srcset="images/dice4.png";
    break;
  }
  case 5:
  {
    document.querySelector("img.img2").srcset="images/dice5.png";
    break;
  }
  case 6:
  {
    document.querySelector("img.img2").srcset="images/dice6.png";
    break;
  }
}
if(g>i)
{
  document.querySelector("h1").innerText="Player 1 won!!! 🚩";
}
else if (i>g) {document.querySelector("h1").innerText="Player 2 won!!! 🚩";

}else if (g===i) {document.querySelector("h1").innerText="Draw 🏳!!!";

}
