function BtnStartUI(){
  return`
  <div id="BtnStart" style=" 
  width:175px;
  height:55px;
  border-radius: 27.5px;
  font-size:20px;
  line-height: 55px;
  text-align: center;
  font-weight:600;
  font-family: Roboto;
  background-color:#C4C4C4;
  color:#454545;
  " onclick="location.href = '../Topics/Topics.html'" ; 
  onmouseover="BtnStartUI.mouseover(this)";
  onmouseout="BtnStartUI.mouseout(this)"
  >Let's start</div>
    

  
  `
}
BtnStartUI.mouseover = (el) =>{
  el.style.opacity = 0.75;
}

BtnStartUI.mouseout = (el) =>{
  el.style.opacity = 1;
}
// export  const BtnStart = BtnStartUI();

