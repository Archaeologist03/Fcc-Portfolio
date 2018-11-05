// PARTICLES
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '/assets/particles.json', function () {
	// console.log('callback - particles.js config loaded');
});

// DOM SELECTION
const body = document.querySelector("body");
const header = document.querySelector(".header");
const portCont = document.querySelector(".portfolio");
const port = document.querySelector("#portfolio-nav");
const navUl = document.querySelector(".navigation__list");
const navItems = document.querySelectorAll(".navigation__item");
const homeLogo = document.querySelector(".home-logo__link");
const midGifCont = document.querySelector(".header__mid-img-container");
const homeGifOverlay = document.querySelector(".header__mid-img-container__overlay");


// EVENTS
(function () {


	//Add shown class to clicked nav..
	// port.addEventListener("click", () => {
	// 	portCont.classList.add("shown");
	// 	portCont.classList.remove("hidden");
	// });

	//Change mid gif on home logo hover 
	homeLogo.addEventListener("mouseover", () => {
		homeGifOverlay.classList.add("logo-mouseover");
	});
	homeLogo.addEventListener("mouseout", () => {
		homeGifOverlay.classList.remove("logo-mouseover");
	});


	const pageObj = {
		portfolio: portCont,
		// about: ,
		// contact: ,
	}
	// Loop thru nav items and add listener to each of them
	Array.from(navUl.children).forEach(li => li.addEventListener("click", (e) => {
		// Loop over pageObj - check if each of properties has class hidden/shown - add hidden, remove shown
		// All ul elements should have hidden before shown/hidden toggle begins(to avoid having same class multiple times) - to make other elements visible
		// Shown class should be removed from every element when click occurs to prevent multiple shown classes to one element (begin seeable even when we dont want to)
		for (let prop in pageObj) {
			!pageObj[prop].classList.contains("hidden") ? pageObj[prop].classList.add("hidden") : false;
			pageObj[prop].classList.contains("shown") ? pageObj[prop].classList.remove("shown") : false;
		}
		// Portfolio clicked
		if (e.target.textContent.toLowerCase() === "portfolio") {
			pageObj.portfolio.classList.remove("hidden");
			pageObj.portfolio.classList.add("shown");
			// About clicked
		} else if (e.target.textContent.toLowerCase() === "about") {
			pageObj.about.classList.remove("hidden");
			pageObj.about.classList.add("shown");
			// Contact clicked
		} else if(e.target.textContent.toLowerCase() === "contact") {
			pageObj.contact.classList.remove("hidden");
			pageObj.contact.classList.add("shown");
		}

	}));


})();


// Navigation - adding and removing show class on click on all navigation items(including home-logo)