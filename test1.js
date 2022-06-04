function editNav() {
  var x = document.querySelector("header");
  if (x.className === "header") {
    x.className += " responsive";
  } else {
    x.className = "header";
  }
}

//? DOM Elements

const inpFirst = document.querySelector("#first");
const inpLast = document.querySelector("#last");
const inpMail = document.querySelector("#email");
const inpBirthdate = document.querySelector("#birthdate");
const inpQuantity = document.querySelector("#quantity");
const inpRadio = document.querySelectorAll(".check-input");
const inpCheck = document.querySelector("#checkbox1");
const messageAlert = document.querySelectorAll(".message-alert");


//? Validation Prénom
inpFirst.addEventListener('input', (e) => {

  const regexFirst = /\S+([A-Za-zéè]){1,}/;

  if(e.target.value.search(regexFirst) !== 0) {
    messageAlert[0].style.display = "inline";
    inpFirst.style.border = "2px solid #e54858";
    e.preventDefault();
  }   
  else {
    messageAlert[0].style.display = "none";
    inpFirst.style.border = "none";
  }
})

//? Validation Nom
inpLast.addEventListener('input', (e) => {

  const regexLast = /\S+([A-Za-zéè]){1,}/;

  if(e.target.value.search(regexLast) !== 0) {
    messageAlert[1].style.display = "inline";
    inpLast.style.border = "2px solid #e54858";
    e.preventDefault();
  }   
  else {
    messageAlert[1].style.display = "none";
    inpLast.style.border = "none";
  }
})

//? Validation Email
inpMail.addEventListener('input', (e) => {

  const regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(e.target.value.search(regexMail) !== 0) {
    messageAlert[2].style.display = "inline";
    inpMail.style.border = "2px solid #e54858";
    e.preventDefault();
  }   
  else {
    messageAlert[2].style.display = "none";
    inpMail.style.border = "none";
  }
})

//? Validation Birdthdate
inpBirthdate.addEventListener('input', (e) => {

  const regexBirthdate = /^([0]?[1-9]|[1|2][0-9]|[3][0|1])([0]?[1-9]|[1][0-2])([0-9]{4}|[0-9]{2})$/;
  //! Faire une regex propre

  if(e.target.value.search(regexBirthdate) === 0) {
    messageAlert[3].style.display = "inline";
    inpBirthdate.style.border = "2px solid #e54858";
    e.preventDefault();
  }   
  else {
    messageAlert[3].style.display = "none";
    inpBirthdate.style.border = "none";
  }
})

//? Validation Quantity
inpQuantity.addEventListener('input', (e) => {

  // const regexNumber = ;
  //! faire une regex propre

  if(e.target.value.length > 2) {
    messageAlert[4].style.display = "inline";
    inpQuantity.style.border = "2px solid #e54858";
    e.preventDefault();
  }   
  else {
    messageAlert[4].style.display = "none";
    inpQuantity.style.border = "none";
  }
})

//? Validation Radio Checked
// inpRadio.addEventListener('input', (e) => {

//   // const regexRadio = ;
//   //! faire une regex propre

// })

//? Validation Condition checked
// inpCheck.addEventListener('input', (e) => {


// })