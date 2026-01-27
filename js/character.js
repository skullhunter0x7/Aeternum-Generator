// Hair colors per planet
const hairColorsByPlanet = {
  "Vireth": ["Brown", "Black", "Blonde", "Red"],
  "Terradine": ["Black", "Dark Grey", "Brown"],
  "Aethere": ["Copper", "Blonde"],
  "Oran": ["Blonde", "Red", "Brown"]
};

// Random names if user leaves it blank
const randomNames = ["Arin", "Lyra", "Doran", "Thalina", "Kael", "Nim", "Soren", "Lira", "Tarin", "Elda"];
const genders = ["Male", "Female"];
const planets = ["Vireth", "Terradine", "Aethere", "Oran"];

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Generate character based on current inputs
function generateCharacter() {
  let name = document.getElementById("char-name").value.trim();
  const gender = document.getElementById("char-gender").value;
  const age = document.getElementById("char-age").value;
  const planet = document.getElementById("char-planet").value;

  if(!name) {
    name = randomItem(randomNames);
  }

  const hair = randomItem(hairColorsByPlanet[planet]);

  const output = 
`Name: ${name}
Gender: ${gender}
Age: ${age}
Planet: ${planet}
Hair Color: ${hair}`;

  document.getElementById("character-output").textContent = output;
}

// Generate fully random character
function randomizeAll() {
  const name = randomItem(randomNames);
  const gender = randomItem(genders);
  const age = Math.floor(Math.random() * 1000) + 1; // Age between 1-1000
  const planet = randomItem(planets);
  const hair = randomItem(hairColorsByPlanet[planet]);

  // Update input fields with random values
  document.getElementById("char-name").value = name;
  document.getElementById("char-gender").value = gender;
  document.getElementById("char-age").value = age;
  document.getElementById("char-planet").value = planet;

  const output = 
`Name: ${name}
Gender: ${gender}
Age: ${age}
Planet: ${planet}
Hair Color: ${hair}`;

  document.getElementById("character-output").textContent = output;
}

document.getElementById("generate-btn").addEventListener("click", generateCharacter);
document.getElementById("random-btn").addEventListener("click", randomizeAll);
