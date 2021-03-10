function myFunction() {
  var LogoUI = document.getElementById("header");
  LogoUI.style.WebkitAnimation = "mymove 2s linear";
  LogoUI.style.top= "350px";
  LogoUI.style.opacity= "1";
}
function showSubtitle(){
  var subtitle = document.getElementById("subtitle")
  subtitle.style.opacity="1";
}
function showButton(){
  var BtnStart = document.getElementById("BtnStart")
  BtnStart.style.WebkitAnimation = "resize .75s linear infinite ";
}
function flyBirdHide(){
  var bird = document.getElementById("FlyBird")
  bird.style.opacity = "0";
 
}

function flyBird(){
  var bird = document.getElementById("FlyBird")
  bird.style.WebkitAnimation = "flyBird 2.5s linear";
  bird.style.top= "-100px";
  bird.style.left= "0px";
  bird.style.opacity = "1";
}
function windX(){
  var wind1 = document.getElementById("wind1")
  wind1.style.WebkitAnimation = "wind1m .75s linear infinite ";
  var wind2 = document.getElementById("wind2")
  wind2.style.WebkitAnimation = "wind2m .75s linear infinite ";

}
flyBirdHide()
setTimeout(showSubtitle,2300)
setTimeout(showButton,2500)
windX()
setTimeout(flyBird,2600)



onload = myFunction