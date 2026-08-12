const buttons =
document.querySelectorAll("button");


buttons.forEach(button => {


button.addEventListener(
"click",
()=>{


button.style.transform =
"scale(0.95)";


setTimeout(()=>{

button.style.transform =
"";

},150);


});


});



window.addEventListener(
"scroll",
()=>{


let header =
document.querySelector("header");


if(window.scrollY>50){

header.style.background =
"rgba(0,0,0,0.8)";

}

else{

header.style.background =
"rgba(0,0,0,0.4)";

}


});
