const hairColorsByPlanet = {
  "Vireth": ["Brown", "Black", "Blonde", "Red"],
  "Terradine": ["Black", "Dark Grey", "Brown"],
  "Aethere": ["Copper", "Blonde"],
  "Oran": ["Blonde", "Red", "Brown"],
};

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateCharacter() {
  let name = document.getElementById("char-name").value.trim();
  const gender = document.getElementById("char-gender").value;
  const age = document.getElementById("char-age").value;
  const planet = document.getElementById("char-planet").value;

  if(!name) {
    name = "[Use NameForge]";
  }

  // Hair color depends on planet
  const hair = randomItem(hairColorsByPlanet[planet]);

  const output = 
`Name: ${name}
Gender: ${gender}
Age: ${age}
Planet: ${planet}
Hair Color: ${hair}`;

  document.getElementById("character-output").textContent = output;
}

document.getElementById("generate-btn").addEventListener("click", generateCharacter);
