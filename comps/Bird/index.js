function BirdUI(){
return`

<div id="Bird"
style ="
width:250%;
height:250%;
background-image:url(../Assets/bird.svg);
background-repeat: no-repeat;
z-index:1;
margin-top:-300px;
margin-left:25px;
Opacity:0; 
"onload="swipwind" >
</div>

`

}
function swipwind(){
stepNumber = stepNumber + 1
   if(stepNumber >= 6)
   {
       stepNumber = 0
   }
   bird.style.src = 'url "../Assets/bird" + stepNumber + ".svg"'
  }
// export  const Bird = BirdUI();