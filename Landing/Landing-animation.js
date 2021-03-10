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
function showButton() {
  var ButtonUI = document.getElementById("BtnStart");
  ButtonUI.style.WebkitAnimation = "resize 2s linear infinite ";
  
}


setTimeout(showSubtitle,2300)
setTimeout(showButton,2500)

onload = myFunction