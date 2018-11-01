/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '/assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});


let port = document.querySelector("#portfolio-nav");
let portCont = document.querySelector(".portfolio");

port.addEventListener("click", () => {
  portCont.classList.add("shown");
 
});


//git fetch/merge/pull..
