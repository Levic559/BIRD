function OptionsUI(url="https://www.health.harvard.edu/media/content/images/GettyImages-1210333449.jpg"){
return `
<div id = "Options" style="
width:180px;
height:135px;
border-radius:20px;
overflow:hidden;
background-color: #C4C4C4;
"
onmouseover="OptionsUI.mouseover(this)"
onmouseout="OptionsUI.mouseout(this)">
<img style="
height:100%;
weight:100%;
object-fit:cover;
"
src="${url}">

</div>


`
}

OptionsUI.mouseover = (el) =>{
  el.style.opacity = 0.5;
}
OptionsUI.mouseout = (el) =>{
  el.style.opacity = 1;
}




// export  const Options = OptionsUI();