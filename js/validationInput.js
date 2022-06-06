//? Regex

const regexFirst = /\S+([A-Za-z]){1,}/;
const regexLast = /\S+([A-Za-z]){1,}/;
const regexMail =	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexNumber = /\b([0-9]|[1-9][0-9])\b/;

//? Fonction si invalid

function error(index, inpName, e) {
	messageAlert[index].style.display = "inline";
	inpName.style.border = "3px solid #e54858"; 
	if(e !== undefined){
		e.preventDefault();
	} 
}

//? Fonction si valid
function good(index, inpName) {
	messageAlert[index].style.display = "none";
	inpName.style.border = "3px solid #279e7a"; // ou none si on prefere la case sans couleur
}

//? Le champ Prénom a un minimum de 2 caractères / n'est pas vide

function inpFirst(e) {
	if (inputs["first"].value.search(regexFirst) !== 0) {
		error(0, inputs["first"], e);
	} else {
		good(0, inputs["first"]);
	}
}

//? Le champ Nom a un minimum de 2 caractères / n'est pas vide

function inpLast(e) {
	if (inputs["last"].value.search(regexLast) !== 0) {
		error(1, inputs["last"], e);
	} else {
		good(1, inputs["last"]);
	}
}

//? L'adresse électronique est valide

function inpMail(e) {
	if (inputs["email"].value.search(regexMail) !== 0) {
		error(2, inputs["email"], e);
	} else {
		good(2, inputs["email"]);
	}
}

//? Date d'anniversaire valide

function inpBirthdate(e) {
	if (inputs["birthdate"].value === "") {
		error(3, inputs["birthdate"], e);
	} else {
		good(3, inputs["birthdate"]);
	}
}

//? Pour le nombre de concours, une valeur numérique est saisie

function inpQuantity(e) {
	if (inputs["quantity"].value.search(regexNumber) !== 0) {
		error(4, inputs["quantity"], e);
	} else {
		good(4, inputs["quantity"]);
	}
}

//! Un bouton radio est sélectionné

function inpRadio(e) {
	if (inputs["location"].value === "") {
		messageAlert[5].style.display = "inline";
		if(e !== undefined){
			e.preventDefault();
		} 
	} else {
		messageAlert[5].style.display = "none";
	}
}

//? La case des conditions generales est sélectionnée

function inpCheck(e) {
	if (inputs["checkbox1"].checked === false) {
		error(6, inputs["checkbox1"], e);
	} else {
		good(6, inputs["checkbox1"]);
	}
}
