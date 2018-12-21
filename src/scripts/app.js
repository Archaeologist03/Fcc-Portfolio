import "../scss/main.scss";

import { domElements } from "./base";




  window.addEventListener("load", function(event) {
		// make listed "pages" seeable only when everythings loaded.
		domElements.portCont.classList.remove("contentNotLoaded");
		domElements.aboutCont.classList.remove("contentNotLoaded");
		domElements.contactCont.classList.remove("contentNotLoaded");



//  ------------- PARTICLES ---------------
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
		particlesJS.load('particles-js', '../../dist/assets/particles.json', function () {
	console.log('callback - particles.js config loaded');
});

  });





// --------------- EVENTS IFFY --------------
(function () {

	//  ----HELPERS START-----

	// Navbar data structure holder
	const pageObj = {
		portfolio: domElements.portCont,
		about: domElements.aboutCont,
		contact: domElements.contactCont,
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
	domElements.homeLogo.addEventListener("click", () => {
		hidePages();
		// Add shown class and remove hidden to show header text when home logo is clicked
		domElements.headerTextCont.classList.remove("headerHidden");
		domElements.headerTextCont.classList.add("headerShown");
		domElements.skillsCont.classList.remove("skillsHidden");
		domElements.skillsCont.classList.add("skillsShown");

	});

	//Change mid gif on home logo hover 
	domElements.homeLogo.addEventListener("mouseover", () => domElements.homeGifOverlay.classList.add("logo-mouseover"));
	domElements.homeLogo.addEventListener("mouseout", () => domElements.homeGifOverlay.classList.remove("logo-mouseover"));

	// Navbar event listener - page change
	// Loop thru nav items and add listener to each of them
	domElements.navItems.forEach(li => li.addEventListener("click", (e) => {
		// Get targets id and targets parent id (fixes border/edges prob)
		let targetParentId = e.target.parentElement.getAttribute("id");
		let targetId = e.target.getAttribute("id");
		// Add hidden, remove shown on every page
		hidePages();
		// Hide(move down) home/header text
		domElements.headerTextCont.classList.add("headerHidden");
		domElements.headerTextCont.classList.remove("headerShown");

		//Hide(move down) skills when navs are clicked
		domElements.skillsCont.classList.add("skillsHidden");
		domElements.skillsCont.classList.remove("skillsShown");
		// Portfolio nav clicked
		if (targetParentId === "portfolio-nav" || targetId === "portfolio-nav") showAndRemovePage(pageObj.portfolio);
		// About clicked
		if (targetParentId === "about-nav" || targetId === "about-nav") showAndRemovePage(pageObj.about);
		// Contact clicked
		if (targetParentId === "contact-nav" || targetId === "contact-nav") showAndRemovePage(pageObj.contact);

	}));

	// Move home/header text to bottom when navbar(other) pages are shown


})();

