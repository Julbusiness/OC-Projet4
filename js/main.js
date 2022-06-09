//? Les 'constantes'

const form = document.forms["reserve"];
const inputs = document.querySelector("#reserve");
const messageAlert = document.querySelectorAll(".message-alert");
const checkRadio = document.querySelectorAll("input[name='location']");
const checkCondition = document.querySelector("#checkbox1");

//? Les 'listerners'

inputs["first"].addEventListener("input", inpFirst);
inputs["last"].addEventListener("input", inpLast);
inputs["email"].addEventListener("input", inpMail);
inputs["birthdate"].addEventListener("input", inpBirthdate);
inputs["quantity"].addEventListener("input", inpQuantity);
inputs["checkbox1"].addEventListener("input", inpCheck);


//? ecouteur sur le submit du formulaire

form.addEventListener("submit", function (e) {

	// Le champ Prenom a un minimum de 2 caractères / n'est pas vide
	inpFirst(e);

	// Le champ Nom a un minimum de 2 caractères / n'est pas vide
	inpLast(e);

	// L'adresse électronique est valide
	inpMail(e);

	// Date d'anniversaire valide
	inpBirthdate(e);

	// Pour le nombre de concours, une valeur numérique est saisie
	inpQuantity(e);

	// Un bouton radio est sélectionné
	inpRadio(e);

	// La case des conditions generales est sélectionnée
	inpCheck(e);

	// Le formulaire est validé
	modalConfirm(e);

});

