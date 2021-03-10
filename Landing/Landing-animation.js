function myFunction() {
  var LogoUI = document.getElementById("header");
  LogoUI.style.WebkitAnimation = "mymove 2s linear";
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

setTimeout(showSubtitle,2300)
setTimeout(showButton,2500)
setTimeout(flyBird,2500)

onload = myFunction