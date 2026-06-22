const input = document.querySelector("input");

input.addEventListener("keyup",function(){

const keyword=this.value.toLowerCase();

const card=document.querySelector(".card");

if(keyword===""){

card.style.display="block";

return;

}

if("video viral terbaru".includes(keyword)){

card.style.display="block";

}else{

card.style.display="none";

}

});
