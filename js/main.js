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
const formData = document.querySelectorAll(".formData");

// ecouteur sur le submit du formulaire
formulaire.addEventListener("submit", function (e) {
	const inputs = this;

	// Le champ Prénom a un minimum de 2 caractères / n'est pas vide
	inpFirst(e);

	// Le champ Nom a un minimum de 2 caractères / n'est pas vide
	inpLast(e);

	// L'adresse électronique est valid
	inpMail(e);

	//! Date d'anniversaire valide

	// Pour le nombre de concours, une valeur numérique est saisie
	inpQuantity(e);

	//! Un bouton radio est sélectionné

	// La case des conditions generales est sélectionnée
	inpCheck(e);
});
