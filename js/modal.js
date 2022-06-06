//? DOM elements

const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelector(".close");

//? Open modal

function editNav() {
	var x = document.querySelector("header");
	if (x.className === "header") {
		x.className += " responsive";
	} else {
		x.className = "header";
	}
}

//? Fonction pour ouvrir la modale

function launchModal() {
  modalBg.style.display = "block";
}

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


//? fonction pour fermer la modale

// J'ecoute le click sur mon bouton avec la classe 'close'
modalClose.addEventListener("click", closeModal);

// fonction qui permet de fermer la modal
function closeModal() {
  modalBg.style.display = "none";
}