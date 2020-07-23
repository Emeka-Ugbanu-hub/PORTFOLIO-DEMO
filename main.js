const page = document.querySelector(".portfolio__content");
const nav = document.querySelector(".portfolio__nav");
const img= document.querySelector(".logo");
const active = document.querySelector(".active");
const visible = document.querySelector(".nav");
const skill = document.querySelector(".skill__page");
const barAnimation = document.querySelectorAll(".progress__bar");
const activefirst = document.querySelectorAll(".btn__nav");
function small(){
  var s =0;
  while(s < activefirst.length){
    activefirst[s].classList.remove("small");
    s++
  }
}
for(let k = 0; k < activefirst.length;k++)
for(let i = 0; i < barAnimation.length; i++){
window.addEventListener("scroll",function(){
  const scrollme = window.scrollY;
  console.log(scrollme);
 if(activefirst[1].classList.contains("small")){
  activefirst[0].classList.remove("active");
  activefirst[0].classList.remove("small");
 } 
if((scrollme > 1881) && (scrollme < 1925 )){
  small()
  activefirst[2].classList.add("small");

}
if((scrollme > 3300) && (scrollme < 3466 )){
  small()
  activefirst[3].classList.add("small");
}

if((scrollme > 4275) && (scrollme < 5841 )){
  small()
  activefirst[5].classList.add("small");
}

if((scrollme > 3931) && (scrollme < 4092 )){
  small()
  activefirst[4].classList.add("small");
}
if((scrollme > 6400) && (scrollme < 6596 )){
  small()
  activefirst[6].classList.add("small");
}

else if((scrollme > 900) && (scrollme < 1005 )){
  barAnimation[i].classList.add("bar__animation");
  small()
  activefirst[1].classList.add("small");
}

  else if(scrollme > 0){
    nav.style.height=10 + "vh";
    img.style.width=70 + "px";
    img.style.marginTop=1 + "em";
    active.style.height=2.2 + "em";
  }
  else{
    nav.style.height=16+ "vh";
    img.style.width=80 + "px";
    img.style.marginTop=2 + "em";
    active.style.height=4 + "em";  
    activefirst[k].classList.remove("small");
    activefirst[0].classList.add("active");
  }
})
}

function me(target){
  var x =0;
  while(x < target.length){
    target[x].classList.remove("active__change");
    x++
  }
}



var change = document.querySelectorAll(".btn__change");
for(let c = 0; c < change.length; c++){
  change[c].addEventListener("click",function(){
  
    me(change)
   
    this.classList.add("active__change");
  })
  
  } 

  const hone = document.querySelector(".h1");
  const hthree = document.querySelector(".h3");
  const honetwo = document.querySelector(".h1__two");
  const ptwo = document.querySelector(".p__two");
 
  change[0].addEventListener("click",function(){
    hone.innerHTML = "Software Testing";
    hthree.innerHTML = "Product Testing";
    honetwo.innerHTML = "Bright Imaging INC";
    ptwo.innerHTML = " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
  })

change[1].addEventListener("click",function(){
  hone.innerHTML = "Programming";
    hthree.innerHTML = "Code";
    honetwo.innerHTML = "Crystal Web Pro";
    ptwo.innerHTML = " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
})
change[2].addEventListener("click",function(){
  hone.innerHTML = "Content Writing";
  hthree.innerHTML = "Editing";
  honetwo.innerHTML = "Crystal Web Pro";
  ptwo.innerHTML = " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
})
change[3].addEventListener("click",function(){
  hone.innerHTML = "Graphics";
    hthree.innerHTML = "Photoshop";
    honetwo.innerHTML = "Crystal Web Pro";
    ptwo.innerHTML = " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
})

var liChange = document.querySelector(".connected__circles");
const liArr = Array.from(liChange.children);
for(let j = 0; j < liArr.length; j++){
  liArr[j].addEventListener("click",function(){
   const move = document.querySelector(".active__circle")
  
    liArr[j].appendChild(move) ;
})
}
const tooltip = document.querySelector(".tooltip__text");
liArr[0].addEventListener("click", function(){
  tooltip.innerHTML = "PHYTON";
}) 

liArr[1].addEventListener("click", function(){
  tooltip.innerHTML = "JAVASCRIPT";
}) 

liArr[2].addEventListener("click", function(){
  tooltip.innerHTML = "SEO";
}) 
liArr[3].addEventListener("click", function(){
  tooltip.innerHTML = "REACT";
}) 
liArr[4].addEventListener("click", function(){
  tooltip.innerHTML = "PHOTOSHOP";
}) 
liArr[5].addEventListener("click", function(){
  tooltip.innerHTML = "HTML&CSS";
}) 
liArr[6].addEventListener("click", function(){
  tooltip.innerHTML = "PHP";
}) 

var workButton = document.querySelectorAll(".work__button");


for(let b = 0; b < workButton.length; b++ ){
workButton[b].addEventListener("click",function(){
 
  var j = 0;
  while(j < workButton.length){
    workButton[j].style.backgroundColor="#d1d1d1";
    workButton[j].style.color="rgb(150, 148, 148)";
    j++
  } 
   workButton[b].style.backgroundColor = "#9ccc0b";
  workButton[b].style.color = "#ffffff";
})
}

workButton[0].style.backgroundColor="#9ccc0b";
workButton[0].style.color="#ffffff";
var test = document.querySelectorAll(".me");

function cimg(){
  var l = 0;
  while(l < test.length){
    test[l].classList.add("change__img");
    l++
  } 
}

workButton[0].addEventListener("click",function(){
  cimg()
  test[0].classList.remove("change__img");
  
})
workButton[1].addEventListener("click",function(){
  cimg()
  test[1].classList.remove("change__img");
  
})

workButton[2].addEventListener("click",function(){
  cimg()
  test[2].classList.remove("change__img");
  
})
workButton[3].addEventListener("click",function(){
  cimg()
  test[3].classList.remove("change__img");
  
})

if (window.matchMedia(' only screen and (min-device-width : 320px) and (max-device-width : 600px)').matches){

 window.addEventListener("scroll",function(){
  const mqscroll = window.scrollY;
   if(mqscroll > 0){
  nav.style.height=30 + "vh";
 img.style.width=80 + "px";
 img.style.height=70 + "px";
   }
   else{
    nav.style.height=30 + "vh";
    img.style.width=90
    img.style.height=80 + "px";  
   }
 })
 const menu = document.querySelector(".menu");
 menu.addEventListener("click",function(){
 visible.classList.toggle("visible");
 visible.classList.toggle("height");
 nav.classList.toggle("increasment");

 })
}