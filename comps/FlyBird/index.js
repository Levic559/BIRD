function FlyBirdUI(){
  return`
  <div id="FlyBird" style=" 
  position: relative;
  left:00px;
  top:-100px;
  ">
  <div 
  style=" 
  width: 300px;
  height: 200px;
  background-image: url(../Assets/body.svg);
  background-repeat: no-repeat;
  z-index: 1;
  position: abosolute;
  left:0px;
  ">
  </div>
  <div id="wind1"
  style=" 
  width: 250px;
  height: 200px;
  left:-20px;
  top:-85px;
  background-image: url(../Assets/wind1.svg);
  background-repeat: no-repeat;
  z-index: 3;
  position: absolute;
  ">
  </div>
  <div id="wind2"
  style=" 
  width: 160px;
  height: 600px;
  left:140px;
  top:-210px;
  background-image: url(../Assets/wind2.svg);
  background-repeat: no-repeat;
  z-index: 2;
  position: absolute;
  ">
  </div>
  </div>
  
  `
}

// export  const FlyBird = FlyBirdUI();