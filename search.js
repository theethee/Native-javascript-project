
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
// -----------------------------------

// resultatet av sökningen visas sökningen är klar
const mealRes = document.querySelector("#mealContainer");
// Namn på maträtten visas när sökningen är klar
const mealName = document.querySelector("#meal-name");

const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const button = document.querySelector("#formButton");
const inputField = document.querySelector("#input-search");

// -----------------------------------

// anropar funktionen när man klickar på knappen
button.addEventListener("click", handleSearch);
// Anropar funktionen när användare ändrar i textfält
inputField.addEventListener("input", handleInput);
let errors = document.querySelector("#errors");

function handleInput() {
  let inputField = document.querySelector("#input-search");
  // om textfältet är tomt
  if (inputField.value === "") {
    // Visa felmeddelande
    errors.style.display = "block";
    errors.innerHTML = `
    <p class="error-color">Error:</p>
    <p class="error-color">Please type something</p>`;
  } else {
    // Annars dölj felmeddelande
    errors.style.display = "none";
  }
}

function handleSearch() {
  // hanterar maträtt beroende på vad användaren skriver in
  let input = document.querySelector("#input-search").value;
 
  // fetchar API och användarens input
    fetch(url + input)
    // tas emot bearbetar JSON
      .then((response) => response.json())
      .then((data) => {
        // åtkomst till info om maträtt i index 0
        let getMeal = data.meals[0];

        // console.log(getMeal);

        // tom array
        let ingredients = [];
        let number = 1;

        // loopar för att hitta ingredienser och mått
        for (let i in getMeal) {
          if (i.startsWith("strIngredient") && getMeal[i]) {
            // lägger in i arrayen
            ingredients.push(
              `${getMeal[i]} - ${getMeal["strMeasure" + number]} `
            );
            number++;
          }
        }

        // Visar bild, och all info om maträtten
        mealRes.innerHTML = `

  <div id="result-pic-div"><img src=${getMeal.strMealThumb} id="result-pic" alt="picture-of-meal"></div>

  <div id="meal-name-div"><h2 id="meal-name">${getMeal.strMeal}</h2></div>
  <div id="ingredients-header-div"><h4>Ingredients: </h4></div>

  <div id="ul-center"><ul id="ul-ingredients"></ul></div>
  <div id="instructions-header-div"><h4>Instructions: </h4></div>
  <div id="div-instructions"><p id="p-instructions">${getMeal.strInstructions}</p></div>

  </div>
  `;
        // skapar lika många li-element som det finns ingredienser i ul
        for (let j = 0; j < ingredients.length; j++) {
          let createLi = document.createElement("li");
          createLi.innerText = ingredients[j];
          document.querySelector("#ul-ingredients").appendChild(createLi);
        }
      });
  }


// -----------------------------------------

let hamburger = document.querySelector(".hamburger");
let navbar = document.querySelector(".nav");


// Öppnar och stänger hamburgarmenyn
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// ---------------------------------------
