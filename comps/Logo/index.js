function LogoUI(fontSize="84",fontWeight="700", Scolor="grey"){
  return`
  <div style=" 
  font-size:${fontSize}px;
  font-weight:${fontWeight};
  font-family: Roboto;
  position:absolute;
  color:#E95719;
  text-shadow:3px 3px 3px ${Scolor} ;
  transition: opactity 0.3s; left 0.5s;
  opacity:1; 
  onmouseover="LogoUI.HandleMouseover(this)";
  onmouseout="LogoUI.HandleMouseout(this)";
  onclick="LogoUI.Handleclick(this)";
  >BIRD</div>
  
  `
}

LogoUI.HandleMouseover = (el) =>{
  el.style.opacity = 0.75;
}

LogoUI.HandleMouseout = (el) =>{
  el.style.opacity = 1;
}

LogoUI.Handleclick = (el) =>{
  el.style.top = "-20px";
  el.style.fontSize="550%";
}

// export  const Logo = LogoUI();