function OptionsUI(url=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-r0CpT8B8c18zhR_QILDHZY-ElmV3FZ3vZQ&usqp=CAU", Site="location.href = '../Topics/Topics.html'"){
return`
<div id="Options" style="
width:180px;
height:130px;
border-radius:20px;
overflow:hidden;

"
onclick="${Site}";
>
<img style="
  height:100%;
  weight:100%;
  object-fit:cover;
 
 "
  src="${url}"/>


<div>




`

}


// export  const Options = OptionsUI();