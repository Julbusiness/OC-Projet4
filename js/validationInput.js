//? Les constantes

const inputs = document.forms["reserve"];
const messageAlert = document.querySelectorAll(".message-alert");

//? Regex
const regexName = /\S+([A-Za-z]){1,}/;
const regexMail =
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexNumber = /\b([0-9]|[1-9][0-9])\b/;

//? Fonction si invalid

function error(e, event) {
	messageAlert[e].style.display = "inline";
	event.style.border = "2px solid #e54858";
}

//? Fonction si valid
function good(e, event) {
	messageAlert[e].style.display = "none";
	event.style.border = "none";
}

// ecouteur sur chaque input
//? Le champ Prénom a un minimum de 2 caractères / n'est pas vide

inputs["first"].addEventListener("input", inpFirst);

function inpFirst(e) {
	if (inputs["first"].value.search(regexName) !== 0) {
		error(0, inputs["first"]);
		e.preventDefault();
	} else {
		good(0, inputs["first"]);
	}
}

//? Le champ Nom a un minimum de 2 caractères / n'est pas vide

inputs["last"].addEventListener("input", inpLast);

function inpLast(e) {
	if (inputs["last"].value.search(regexName) !== 0) {
		error(1, inputs["last"]);
		e.preventDefault();
	} else {
		good(1, inputs["last"]);
	}
}

//? L'adresse électronique est valide

inputs["email"].addEventListener("input", inpMail);

function inpMail(e) {
	if (inputs["email"].value.search(regexMail) !== 0) {
		error(2, inputs["email"]);
		e.preventDefault();
	} else {
		good(2, inputs["email"]);
	}
}

//! Date d'anniversaire valide

//? Pour le nombre de concours, une valeur numérique est saisie

inputs["quantity"].addEventListener("input", inpQuantity);

function inpQuantity(e) {
	if (inputs["quantity"].value.search(regexNumber) !== 0) {
		error(4, inputs["quantity"]);
		e.preventDefault();
	} else {
		good(4, inputs["quantity"]);
	}
}

//! Un bouton radio est sélectionné

//! La case des conditions generales est sélectionnée
