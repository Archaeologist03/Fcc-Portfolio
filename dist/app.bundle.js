!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";particlesJS.load("particles-js","../../dist/assets/particles.json",function(){console.log("callback - particles.js config loaded")});document.querySelector("body"),document.querySelector(".header");var n=document.querySelector(".portfolio"),r=(document.querySelector("#portfolio-nav"),document.querySelector(".navigation__list"),document.querySelectorAll(".navigation__item")),c=document.querySelector(".home-logo__link"),i=(document.querySelector(".header__mid-img-container"),document.querySelector(".header__mid-img-container__overlay")),a=document.querySelector(".header__text-container"),s=document.querySelector(".skills-container"),l=document.querySelector(".about"),u=document.querySelector(".contact");!function(){var e={portfolio:n,about:l,contact:u};function t(){for(var t in e)!e[t].classList.contains("hidden")&&e[t].classList.add("hidden"),e[t].classList.contains("shown")&&e[t].classList.remove("shown")}function o(e){e.classList.remove("hidden"),e.classList.add("shown")}c.addEventListener("click",function(){t(),a.classList.remove("headerHidden"),a.classList.add("headerShown"),s.classList.remove("skillsHidden"),s.classList.add("skillsShown")}),c.addEventListener("mouseover",function(){return i.classList.add("logo-mouseover")}),c.addEventListener("mouseout",function(){return i.classList.remove("logo-mouseover")}),r.forEach(function(n){return n.addEventListener("click",function(n){var r=n.target.parentElement.getAttribute("id"),c=n.target.getAttribute("id");console.log(n.target),t(),a.classList.add("headerHidden"),a.classList.remove("headerShown"),s.classList.add("skillsHidden"),s.classList.remove("skillsShown"),"portfolio-nav"!==r&&"portfolio-nav"!==c||o(e.portfolio),"about-nav"!==r&&"about-nav"!==c||o(e.about),"contact-nav"!==r&&"contact-nav"!==c||o(e.contact)})})}()}]);