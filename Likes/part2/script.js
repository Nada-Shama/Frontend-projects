
function likes(id){
  var element = document.getElementById(id) ;
  var num   = Number(element.innerText);
  num++;
  element.innerText=num;
}

