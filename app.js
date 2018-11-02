// PARTICLES
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '/assets/particles.json', function () {
	// console.log('callback - particles.js config loaded');
});

// DOM SELECTION
const portCont = document.querySelector(".portfolio");
const port = document.querySelector("#portfolio-nav");
const navItems = document.querySelectorAll(".navigation__item");
const homeLogo = document.querySelector(".home-logo__link");
const midGifCont = document.querySelector(".header__mid-img-container");
const homeGifOverlay = document.querySelector(".header__mid-img-container__overlay");

console.log(midGifCont);

// EVENTS

//Add shown class to clicked nav..
port.addEventListener("click", () => {
	portCont.classList.add("shown");
});

// WORK ON HAVING TWO SEPARATE TRANSFORMS(probably wont work with adding classes like this)
//Add animation to mid gif when nav is clicked
// navItems.forEach(nav => nav.addEventListener("click", () => {
// 	console.log(nav);
// 	midGifCont.classList.add("nav-click");
// }));

// Cursor..
// port.addEventListener("mouseover", () => {
// 	let newCursor = port.classList.add("new-cursor");
// });

//Change mid gif on home logo hover 
homeLogo.addEventListener("mouseover", () => {
	homeGifOverlay.classList.add("logo-mouseover");
});
homeLogo.addEventListener("mouseout", () => {
	homeGifOverlay.classList.remove("logo-mouseover");
});

