function BtnBackUI(fontSize="20",fontWeight="600"){
  return`
  <div style=" 
  font-size:${fontSize}px;
  font-weight:${fontWeight};
  font-family: Roboto;
  position:absolute;
  color:#353535;
  
  transition: opactity 0.3s; left 0.5s;
  opacity:1;
  "
  onmouseover="LogoUI.HandleMouseover(this)";
  onmouseout="LogoUI.HandleMouseout(this)";
  onclick="LogoUI.Handleclick(this)";
  > <span style=" font-size: 24px; font-weight:500;
  "><<<</span> Back</div>
  
  `
}

export  const BtnBack = BtnBackUI();