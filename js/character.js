// Hair colors per planet
const hairColorsByPlanet = {
  "Vireth": ["Brown", "Black", "Blonde", "Red"],
  "Terradine": ["Black", "Dark Grey", "Brown"],
  "Aethere": ["Copper", "Blonde"],
  "Oran": ["Blonde", "Red", "Brown"]
};

// Example random names
const randomNames = ["Arin", "Lyra", "Doran", "Thalina", "Kael", "Nim", "Soren", "Lira", "Tarin", "Elda"];
const genders = ["Male", "Female"];
const planets = ["Vireth", "Terradine", "Aethere", "Oran"];

// DOM elements
const nameInput = document.getElementById("char-name");
const genderSelect = document.getElementById("char-gender");
const ageInput = document.getElementById("char-age");
const planetSelect = document.getElementById("char-planet");
const hairSelect = document.getElementById("char-hair");
const outputDiv = document.getElementById("character-output");

// Populate hair color dropdown based on planet
function updateHairOptions() {
  const planet = planetSelect.value;
  hairSelect.innerHTML = '<option value="">Random</option>';
  hairColorsByPlanet[planet].forEach(color => {
    const option = document.createElement("option");
    option.value = color;
    option.textContent = color;
    hairSelect.appendChild(option);
  });
}

// Call once on page load
updateHairOptions();

// Update hair colors when planet changes
planetSelect.addEventListener("change", updateHairOptions);

// Pick random item from array
function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Generate character based on current inputs
function generateCharacter() {
  let name = nameInput.value.trim() || randomItem(randomNames);
  const gender = genderSelect.value;
  const age = ageInput.value;
  const planet = planetSelect.value;
  const hair = hairSelect.value || randomItem(hairColorsByPlanet[planet]);

  const output = 
`Name: ${name}
Gender: ${gender}
Age: ${age}
Planet: ${planet}
Hair Color: ${hair}`;

  outputDiv.textContent = output;
}

// Generate fully random character
function randomizeAll() {
  const name = randomItem(randomNames);
  const gender = randomItem(genders);
  const age = Math.floor(Math.random() * 1000) + 1;
  const planet = randomItem(planets);
  const hair = randomItem(hairColorsByPlanet[planet]);

  // Update input fields
  nameInput.value = name;
  genderSelect.value = gender;
  ageInput.value = age;
  planetSelect.value = planet;
  updateHairOptions();
  hairSelect.value = hair;

  const output = 
`Name: ${name}
Gender: ${gender}
Age: ${age}
Planet: ${planet}
Hair Color: ${hair}`;

  outputDiv.textContent = output;
}

// Event listeners
document.getElementById("generate-btn").addEventListener("click", generateCharacter);
document.getElementById("random-btn").addEventListener("click", randomizeAll);

document.getElementById("generate-btn").addEventListener("click", generateCharacter);
document.getElementById("random-btn").addEventListener("click", randomizeAll);
