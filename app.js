//  ------------- PARTICLES ---------------
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '/assets/particles.json', function () {
	console.log('callback - particles.js config loaded');
});



// --------------- DOM SELECTION ---------------
const body = document.querySelector("body");
const header = document.querySelector(".header");
const portCont = document.querySelector(".portfolio");
const port = document.querySelector("#portfolio-nav");
const navUl = document.querySelector(".navigation__list");
const navItems = document.querySelectorAll(".navigation__item");
const homeLogo = document.querySelector(".home-logo__link");
const midGifCont = document.querySelector(".header__mid-img-container");
const homeGifOverlay = document.querySelector(".header__mid-img-container__overlay");
const headerTextCont = document.querySelector(".header__text-container");
const aboutCont = document.querySelector(".about");
const contactCont = document.querySelector(".contact");



// --------------- EVENTS IFFY --------------
(function () {

	//  ----HELPERS START-----

	// Navbar data structure holder
	const pageObj = {
		portfolio: portCont,
		about: aboutCont,
		contact: contactCont,
	}

	// --- Loop over pageObj - check if each of properties has class hidden/shown - add hidden, remove shown
	// --- All ul elements should have hidden before shown/hidden toggle begins(to avoid having same class multiple times) - to make other elements visible
	// --- Shown class should be removed from every element when click occurs to prevent multiple shown classes to one element (beign seeable even when we dont want to)
	function hidePages() {
		for (let prop in pageObj) {
			!pageObj[prop].classList.contains("hidden") ? pageObj[prop].classList.add("hidden") : false;
			pageObj[prop].classList.contains("shown") ? pageObj[prop].classList.remove("shown") : false;
		}
	}

	// Used for navbar adding and removing shown and hidden - scalable!
	function showAndRemovePage(page) {
		page.classList.remove("hidden");
		page.classList.add("shown");
	}



	// ----EVENTS START----

	//Home-logo btn click event - get to home page on logo click
	homeLogo.addEventListener("click", () => {
		hidePages();
		// Add shown class and remove hidden to show header text when home logo is clicked
		headerTextCont.classList.remove("headerHidden");
		headerTextCont.classList.add("headerShown");
	});

	//Change mid gif on home logo hover 
	homeLogo.addEventListener("mouseover", () => homeGifOverlay.classList.add("logo-mouseover"));
	homeLogo.addEventListener("mouseout", () => homeGifOverlay.classList.remove("logo-mouseover"));

	// Navbar event listener - page change
	// Loop thru nav items and add listener to each of them
	navItems.forEach(li => li.addEventListener("click", (e) => {
		// Get targets id and targets parent id (fixes border/edges prob)
		let targetParentId = e.target.parentElement.getAttribute("id");
		let targetId = e.target.getAttribute("id");
		console.log(e.target);
		// Add hidden, remove shown on every page
		hidePages();
		// Hide(move down) home/header text
		headerTextCont.classList.add("headerHidden");
		// Portfolio nav clicked
		if (targetParentId === "portfolio-nav" || targetId === "portfolio-nav") showAndRemovePage(pageObj.portfolio);
		// About clicked
		if (targetParentId === "about-nav" || targetId === "about-nav") showAndRemovePage(pageObj.about);
		// Contact clicked
		if (targetParentId === "contact-nav" || targetId === "contact-nav") showAndRemovePage(pageObj.contact);

	}));

	// Move home/header text to bottom when navbar(other) pages are shown


})();

