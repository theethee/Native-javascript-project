// HANTERA NAV------------------------
// navigerar till länkar i nav
document.querySelector("#home-nav").addEventListener("click", () => {
  location.href = "index.html";
});

document.querySelector("#search-nav").addEventListener("click", () => {
  location.href = "search.html";
});

document.querySelector("#generator-nav").addEventListener("click", () => {
  location.href = "generator.html";
});

document.querySelector("#contact-nav").addEventListener("click", () => {
  location.href = "contact.html";
});

//FORMULÄR----------------------------


let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let inputText = document.getElementById("input-text");
let sendButton = document.getElementById("sendButton");
let errors = document.getElementById("errors");

// hanterar felmeddelanden
errors.innerHTML = `
<p class="error-color" id="p-error">Error:</p>
<ul>
<div id="firstName-error" class="error-color"><li>Please input first name</li></div>

<div id="lastName-error" class="error-color"><li>Input last name</li></div>

<div id="textInput-error" class="error-color"><li>Input text</li></div>
</ul>
`;

// var felmeddelanden ska vara
let errorP = document.getElementById("p-error");
let firstNameError = document.getElementById("firstName-error");
let textInputError = document.getElementById("textInput-error");
let lastNameError = document.getElementById("lastName-error");

// Göm felmeddelande
errors.style.display = "none";
// inaktivera knappen
sendButton.disabled = true;

// anropar handleTextField-funktionen
sendButton.addEventListener("click", handleTextField);
firstName.addEventListener("input", handleTextField);
lastName.addEventListener("input", handleTextField);
inputText.addEventListener("input", handleTextField);

function handleTextField() {
  // Om textfältet är tomt: knapp inaktiveras, felmeddelande visas,  textfältet blir rött
  errors.style.display = "block";
  if (firstName.value === "") {
    sendButton.disabled = true;
    firstNameError.style.display = "block";
    firstName.style.backgroundColor = "red";
  // textfält ifyllt: knapp inaktiverad, felmeddelande visas ej, textfält grönt
  } else if (firstName !== "") {
    sendButton.disabled = true;
    firstNameError.style.display = "none";
    firstName.style.backgroundColor = "lightgreen";
  }

  // Om textfältet är tomt: knapp inaktiveras, felmeddelande visas,  textfältet blir rött
  if (lastName.value === "") {
    sendButton.disabled = true;
    lastNameError.style.display = "block";
    lastName.style.backgroundColor = "red";
     // textfält ifyllt: knapp inaktiverad, felmeddelande visas ej, textfält grönt
  } else if (lastName !== "") {
    sendButton.disabled = true;
    lastNameError.style.display = "none";
    lastName.style.backgroundColor = "lightgreen";
  }
    // Om textfältet är tomt: knapp inaktiveras, felmeddelande visas,  textfältet blir rött
  if (inputText.value === "") {
    sendButton.disabled = true;
    textInputError.style.display = "block";
    inputText.style.backgroundColor = "red";
     // textfält ifyllt: knapp inaktiverad, felmeddelande visas ej, textfält grönt
  } else if (inputText !== "") {
    sendButton.disabled = true;
    textInputError.style.display = "none";
    inputText.style.backgroundColor = "lightgreen";
  }

  if (
    // Om ingen av fälten är tomma
    firstName.value !== "" &&
    lastName.value !== "" &&
    inputText.value !== ""
  ) {
    // Ta bort alla felmeddelanden, aktivera knappen
    errors.style.display = "none";
    sendButton.disabled = false;
  }
}

// ------------------------------------
// BUGER MENU
let hamburger = document.querySelector(".hamburger");
let navbar = document.querySelector(".nav");

// Öppnar och stänger hamburgarmenyn
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
// ---------------------------------------
