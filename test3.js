//? Open modal

function editNav() {
  var x = document.querySelector("header");
  if (x.className === "header") {
    x.className += " responsive";
  } else {
    x.className = "header";
  }
}

//? DOM Elements

const messageAlert = document.querySelectorAll(".message-alert");
const regexName = /\S+([A-Za-z]){1,}/;
const regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexNumber = /\b([0-9]|[1-9][0-9])\b/;


//! Implémenter entrées du formulaire

// en cas d'erreur je lance ma fonction 'error' avec comme parametre e = indice du message d'alerte et event = nom de la variable.
function error(e, event) {
  messageAlert[e].style.display = "inline";
  event.style.border = "2px solid #e54858";
}

// en cas de remplissage correct je lance ma fonction 'good' avec comme parametre e = indice du message d'alerte et event = nom de la variable.
function good(e, event) {
  messageAlert[e].style.display = "none";
  event.style.border = "none";
}

//! test de validation

const formulaire = document.forms["reserve"];
// console.log(formulaire);

formulaire.addEventListener("submit", function(e) {

  const inputs = this;
  // console.log(inputs);

  //? Le champ Prénom a un minimum de 2 caractères / n'est pas vide

    if(inputs["first"].value.search(regexName) !== 0){
      error(0, inputs["first"]);
      e.preventDefault();
    } 
      else {
      good(0, inputs["first"]);
      }

  //? Le champ Nom a un minimum de 2 caractères / n'est pas vide

    if(inputs["last"].value.search(regexName) !== 0){
      error(1, inputs["last"]);
      e.preventDefault();
    }
      else {
        good(1, inputs["last"]);
        }

  //? L'adresse électronique est valide

    if(inputs["email"].value.search(regexMail) !== 0){
      error(2, inputs["email"]);
      e.preventDefault();
    }
      else {
        good(2, inputs["email"]);
        }

  //? Date d'anniversaire valide

  //? Pour le nombre de concours, une valeur numérique est saisie

    if(inputs["quantity"].value.search(regexNumber) !== 0){
      error(4, inputs["quantity"]);
      e.preventDefault();
    }
      else {
        good(4, inputs["quantity"]);
        }

  //? Un bouton radio est sélectionné

  //? La case des conditions generales est sélectionnée
   
              
})