document.querySelector(".header").innerHTML += LogoUI(30,700, "#C4C4C4");
document.querySelector(".banner").innerHTML += BannerUI("Hot Topics");
document.querySelector(".introArea").innerHTML += IntroUI();
document.querySelector(".optionArea").innerHTML += OptionsUI("Covid19","https://images.creativemarket.com/0.1.0/ps/8939271/1820/1214/m1/fpnw/wm0/covid-19-page-1-.jpg?1598282674&s=4b9d3a08eb72c1a83aa0428fab8ab469","../covid-19_options/covid-19_options.html","Covid-19");
document.querySelector(".optionArea").innerHTML += OptionsUI("BLM","https://amazonwatch.org/assets/images/thumbs/2020/0602-statement-in-solidarity-with-the-black-lives-matter-movement.jpg","","BLM");
document.querySelector(".optionArea").innerHTML += OptionsUI("LGBT","https://image.freepik.com/free-vector/men-women-with-colorful-lgbtq-pride-flags_94753-2531.jpg","","LGBT");






function changeIntro(){
  var C19 = document.getElementById("Covid19");
  C19.onmouseover = function () {
   var element = document.getElementById("nomal");
  element.classList.add("reMove");
  var element = document.getElementById("topicC19");
  element.classList.remove("reMove");
    C19.style.opacity ="0.5";

    


  }
  C19.onmouseout = function () {
    var element = document.getElementById("nomal");
   element.classList.remove("reMove");
   var element = document.getElementById("topicC19");
   element.classList.add("reMove");
   C19.style.opacity ="1";

   

   }


   var BLM = document.getElementById("BLM");
  BLM.onmouseover = function () {
   var element = document.getElementById("nomal");
  element.classList.add("reMove");
  var element = document.getElementById("topicBlm");
  element.classList.remove("reMove");
  BLM.style.opacity ="0.5";
  var element = document.getElementById("optionArea");
  element.classList.add("moveBack");
   


  }
  BLM.onmouseout = function () {
    var element = document.getElementById("nomal");
   element.classList.remove("reMove");
   var element = document.getElementById("topicBlm");
   element.classList.add("reMove");
   BLM.style.opacity ="1";
   var element = document.getElementById("optionArea");
   element.classList.remove("moveBack");
   }


   

   var LGBT = document.getElementById("LGBT");
  LGBT.onmouseover = function () {
   var element = document.getElementById("nomal");
  element.classList.add("reMove");
  var element = document.getElementById("topicLgbt");
  element.classList.remove("reMove");
  LGBT.style.opacity =".5";
  var element = document.getElementById("optionArea");
  element.classList.add("moveBack");
  }
  LGBT.onmouseout = function () {
    var element = document.getElementById("nomal");
   element.classList.remove("reMove");
   var element = document.getElementById("topicLgbt");
   element.classList.add("reMove");
  LGBT.style.opacity ="1";
  var element = document.getElementById("optionArea");
  element.classList.remove("moveBack");
   }








}









changeIntro()