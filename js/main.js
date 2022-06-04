//? Open modal

function editNav() {
	var x = document.querySelector("header");
	if (x.className === "header") {
		x.className += " responsive";
	} else {
		x.className = "header";
	}
}

//! Implémenter entrées du formulaire

const formulaire = document.forms["reserve"];
const formData = document.querySelectorAll('.formData');

// ecouteur sur le submit du formulaire
formulaire.addEventListener("submit", function (e) {
	const inputs = this;

	//? Le champ Prénom a un minimum de 2 caractères / n'est pas vide

	if (inputs["first"].value.search(regexName) !== 0) {
		error(0, inputs["first"]);
		e.preventDefault();
	} else {
		good(0, inputs["first"]);
	}

	//? Le champ Nom a un minimum de 2 caractères / n'est pas vide

	if (inputs["last"].value.search(regexName) !== 0) {
		error(1, inputs["last"]);
		e.preventDefault();
	} else {
		good(1, inputs["last"]);
	}

	//? L'adresse électronique est valid

	if (inputs["email"].value.search(regexMail) !== 0) {
		error(2, inputs["email"]);
		e.preventDefault();
	} else {
		good(2, inputs["email"]);
	}

	//! Date d'anniversaire valide

	//? Pour le nombre de concours, une valeur numérique est saisie

	if (inputs["quantity"].value.search(regexNumber) !== 0) {
		error(4, inputs["quantity"]);
		e.preventDefault();
	} else {
		good(4, inputs["quantity"]);
	}

	//! Un bouton radio est sélectionné

	//! La case des conditions generales est sélectionnée
});
