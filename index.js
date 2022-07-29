const div_2 = document.querySelector(".div-nav-2")
const hide = document.getElementById("hide")
const divhide = document.getElementById("divhide")

function myFunction(x) {
    if (x.matches) { // If its -
        div_2.style.cssText = 'display:none !important';
    } else {// if its +
    
        div_2.style.cssText = 'display:inline !important';
    }
  }
  
  var x = window.matchMedia("(max-width: 1450px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes

//   hide.addEventListener("click",(eo) => {
//     divhide.classList.toggle("div-hide-active")
//   })