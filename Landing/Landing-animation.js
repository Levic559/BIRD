function myFunction() {
  var LogoUI = document.getElementById("header");
  LogoUI.style.WebkitAnimation = "mymove 1.5s linear";
  LogoUI.style.top= "350px";
  LogoUI.style.opacity= "1";

  
}
function showSubtitle(){
  var subtitle = document.getElementById("subtitle")
  subtitle.style.opacity="1";
  subtitle.style.WebkitAnimation=".5s";
}
function showButton() {
  var ButtonUI = document.getElementById("BtnStart");
  ButtonUI.style.WebkitAnimation = "resize 2s linear infinite ";
  
}
function flyBird(){
   var Bird = document.getElementById("Bird");
   Bird.style.WebkitAnimation = "flyBird 2s linear";
   Bird.style.opacity= "1";

}

function swipwind1(){
  var wind1 = document.getElementById("wind1");
  wind1.style.WebkitAnimation = "swipwind1 1s linear 10";
}
function swipwind2(){
  var wind2 = document.getElementById("wind2");
  wind2.style.WebkitAnimation = "swipwind2 1s linear 10";
}
swipwind1()
swipwind2()
setTimeout(showSubtitle,1800)
setTimeout(showButton,2000)
setTimeout(flyBird,2300)

onload = myFunction