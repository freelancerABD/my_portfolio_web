
/*------------- toggle style switcher--------------- */

const styleSwitchertoggle = document.querySelector(".style-switcher-toggler");

styleSwitchertoggle.addEventListener("click", () =>{
	document.querySelector(".style-switcher").classList.toggle("open");
})

//hide style - switcher on scroll
window.addEventListener("scroll", () =>{
	if (document.querySelector(".style-switcher").classList.contains("open")) {
		document.querySelector(".style-switcher").classList.remove("open");
	}
})

/*---------------- theme colors ----------------*/
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
	localStorage.setItem("color",color);
		changeColor();
}

function changeColor(){
	alternateStyles.forEach((style) =>{
		if (localStorage.getItem("color") === style.getAttribute("title")) {
			style.removeAttribute("disabled");
		}
		else{
			style.setAttribute("disabled","true");
		}	
	})
}

// checking if 'colot' key exists
if(localStorage.getItem("color") !== null){
	changeColor();
}

/*---------------theme light and dark mode -----------------*/
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () =>{
	document.body.classList.toggle("dark");
	if (document.body.classList.contains("dark")) {
		localStorage.setItem("theme","dark");
	}
	else{
		localStorage.setItem("theme","light");
	}
	updateIcon();
})

function themeModal(){
	// checking if 'theme' key exists
	if (localStorage.getItem("theme") !== null) {
		if (localStorage.getItem("theme") === "light") {
			document.body.classList.remove("dark");
		}
		else{
			document.body.classList.add("dark");
		}
	}
	updateIcon();
}
themeModal();

function updateIcon(){ 
	// body...
	if (document.body.classList.contains("dark")) {
		dayNight.querySelector("i").classList.remove("fa-moon-o");
		dayNight.querySelector("i").classList.add("fa-sun-o");
	}
	else{
		dayNight.querySelector("i").classList.remove("fa-sun-o");
		dayNight.querySelector("i").classList.add("fa-moon-o");
	}
}
// window.addEventListener("load", () =>{
// 	if (document.body.classList.contains("dark")) {
// 		dayNight.querySelector("i").classList.add("fa-sun-o");
// 	}
// 	else{
// 		dayNight.querySelector("i").classList.add("fa-moon-o");
// 	}
// })
