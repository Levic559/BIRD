function myFunction() {
  var LogoUI = document.getElementById("header");
  LogoUI.style.WebkitAnimation = "mymove 2s linear";
  LogoUI.style.top= "300px";
  LogoUI.style.opacity= "1";

  
}
function showSubtitle(){
  var subtitle = document.getElementById("subtitle")
  subtitle.style.opacity="1";
}

setTimeout(showSubtitle,2300)

onload = myFunction