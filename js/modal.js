//? DOM elements

const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelector(".close");

//? Open modal nav

function editNav() {
	var x = document.querySelector("header");
	if (x.className === "header") {
		x.className += " responsive";
	} else {
		x.className = "header";
	}
}

//? Fonction pour ouvrir la modale form

function launchModal() {
	modalBg.style.display = "block";
}

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//? fonction pour fermer la modale form

// J'ecoute le click sur mon bouton avec la classe 'close'
modalClose.addEventListener("click", closeModal);

// fonction qui permet de fermer la modal
function closeModal() {
	modalBg.style.display = "none";
}

//? Modale de confirmation

const modalBgConfirm = document.querySelector(".bground-confirm");
const modalCloseConfirm = document.querySelector(".close-confirm");
const modalCloseConfirmBtn = document.querySelector(".btn-submit-confirm");
// const modalBtnConfirm = document.querySelector(".btn-submit");

// modalBtnConfirm.addEventListener("click", modalConfirm);
modalCloseConfirm.addEventListener("click", closeModalConfirm);
modalCloseConfirmBtn.addEventListener("click", closeModalConfirm);

function modalConfirm(e) {
	if (
		inpFirst(e) !== false &&
		inpLast(e) !== false &&
		inpMail(e) !== false &&
		inpBirthdate(e) !== false &&
		inpQuantity(e) !== false &&
		inpRadio(e) !== false &&
		inpCheck(e) !== false
	) {
		modalBgConfirm.style.display = "block";
		console.log("ok");
		e.preventDefault();
	} else {
		console.log("error");
		e.preventDefault();
	}
}

function closeModalConfirm() {
	modalBgConfirm.style.display = "none";
	modalBg.style.display = "none";
}
