//? Regex
const regexFirst = /\S+([A-Za-z]){1,}/;
const regexLast = /\S+([A-Za-z]){1,}/;
const regexMail =
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexNumber = /\b([0-9]|[1-9][0-9])\b/;

//? Fonction si invalid
// la fonction erreur prends en parametres 3 elements:
// Le prermier element est l'index du message d'alerte afin de selectionner le bon message a afficher
// Le second element est le nom du champ input qui a une erreur
// Le troisieme element est l'evenement qui a ete declenche
/* 
Le but de la fonction etant de mettre en place un message d'erreur et une bordure rouge sur le champ si le remplissage du champ n'est pas correct ou vide.
La dernière partie conditionnelle veut dire que si mon evenement est different de undefined alors j'applique la fonction prevent.default() qui top l'execution du code.
 */
function error(index, inpName, e) {
	messageAlert[index].style.display = "inline";
	inpName.style.border = "3px solid #e54858";
	if (e !== undefined) {
		e.preventDefault();
	}
}

//? Fonction si valid
// la fonction good prend en parametres 2 elements:
// Le premier element est l'index du message d'alerte afin de selectionner le bon message a ne plus afficher
// Le second element est le nom du champ input qui est bon
/* 
Le but de la fonction etant de supprimer ou juste ne pas afficher le message d'erreur et de mettre en place une bordure verte si le remplissage du champ est correct.
 */
function good(index, inpName) {
	messageAlert[index].style.display = "none";
	inpName.style.border = "3px solid #279e7a"; // ou none si on prefere la case sans couleur
}

//? Controle des champs inputs
/*
Le but est d'avoir une vérification réactive en temps réelle que l'on n'a pas avec le submit qui oblige le client a effectuer une action click ou touche entrée.
Pour tous les champs suivants (sauf la validation du bouton radio), la méthode d'analyse et de vérification est la même.
Chaque fonction prends donc un parametre qui est l'evenement qui a ete declenche.
Dans la condition je compare la valeur de l'input avec la regex.
La regex va me retourner 0 ou -1 (0 si le remplissage est correct et -1 si le remplissage est incorrect)
Si il y a une erreur je lance donc la fonction error qui va stopper l'action avec le prevent.default() inclus et je retourne false ce qui me permettra de faire les validations pour lancer ou non ma modale de confirmation.
Sinon je lance ma fonction good.
*/

//? Le champ Prénom a un minimum de 2 caractères / n'est pas vide
function inpFirst(e) {
	if (inputs["first"].value.search(regexFirst) !== 0) {
		error(0, inputs["first"], e);
		return false;
	} else {
		good(0, inputs["first"]);
	}
}

//? Le champ Nom a un minimum de 2 caractères / n'est pas vide

function inpLast(e) {
	if (inputs["last"].value.search(regexLast) !== 0) {
		error(1, inputs["last"], e);
		return false;
	} else {
		good(1, inputs["last"]);
	}
}

//? L'adresse électronique est valide

function inpMail(e) {
	if (inputs["email"].value.search(regexMail) !== 0) {
		error(2, inputs["email"], e);
		return false;
	} else {
		good(2, inputs["email"]);
	}
}

//? Date d'anniversaire valide

function inpBirthdate(e) {
	if (inputs["birthdate"].value === "") {
		error(3, inputs["birthdate"], e);
		return false;
	} else {
		good(3, inputs["birthdate"]);
	}
}

//? Pour le nombre de concours, une valeur numérique est saisie

function inpQuantity(e) {
	if (inputs["quantity"].value.search(regexNumber) !== 0) {
		error(4, inputs["quantity"], e);
		return false;
	} else {
		good(4, inputs["quantity"]);
	}
}

//? Un bouton radio est sélectionné
// la vérification ne se fait que sur le submit
// je vérifie uniquement que la valeur de l'input ne soit pas vide.
function inpRadio(e) {
	if (inputs["location"].value === "") {
		messageAlert[5].style.display = "inline";
		if (e !== undefined) {
			e.preventDefault();
		}
		return false;
	} else {
		messageAlert[5].style.display = "none";
	}
}

//? La case des conditions generales est sélectionnée

function inpCheck(e) {
	if (inputs["checkbox1"].checked === false) {
		error(6, inputs["checkbox1"], e);
		return false;
	} else {
		good(6, inputs["checkbox1"]);
	}
}
