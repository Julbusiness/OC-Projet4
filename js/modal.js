//? DOM elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelector(".close");

const modalBgConfirm = document.querySelector(".bground-confirm");
const modalCloseConfirm = document.querySelector(".close-confirm");
const modalCloseConfirmBtn = document.querySelector(".btn-submit-confirm");

//? Open modal nav
// La fonction etait déjà crée, j'ai juste remplacé le var par une const afin d'être plus à jour sur le js moderne.
// Cette fonction permet lorsqu'elle est appelée de modifier le nom de la classe 'header' en 'header responsive'.
// elle est appelée sur le onclick du bouton 'edit nav' dans le html.

function editNav() {
	const x = document.querySelector("header");
	if (x.className === "header") {
		x.className += " responsive";
	} else {
		x.className = "header";
	}
}

//? Fonction pour ouvrir la modale form
// fonction déjà crée
// On boucle d'abord sur tous les boutons de la classe 'modal-btn'
// Puis on ajoute un écouteur sur le click qui lance la fonction 'launchModal'
function launchModal() {
	modalBg.style.display = "block";
}

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//? fonction pour fermer la modale form

// J'ecoute le click sur mon bouton avec la classe 'close'
modalClose.addEventListener("click", closeModal);

// fonction qui permet de fermer la modale
// j'applique un display:none pour caché la modale.
function closeModal() {
	modalBg.style.display = "none";
}


//? Fonction pour ouvrir la modale de confirmation
// Elle est appelée dans le fichier main.js au submit.
// Dans cette fonction je vérifie que tout mes champs sont corrects et que aucun ne renvois false.
// Dans le cas ou tout est correct, j'ouvre la modal de confirmation
// Sinon, j'affiche un message d'erreur.
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

	//? Fermeture de la modale de confirmation
	// j'écoute les evenements click sur mes boutons de fermeture pour ma modale de confirmation
	modalCloseConfirm.addEventListener("click", closeModalConfirm);
	modalCloseConfirmBtn.addEventListener("click", closeModalConfirm);
	
	// Si la fonction est appelée, sur l'un des deux boutons au click, alors la modale se ferme.
	function closeModalConfirm() {
		modalBgConfirm.style.display = "none";
		modalBg.style.display = "none";
	}
	