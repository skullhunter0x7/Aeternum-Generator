// nameGenerator.js

const affixes = {
  prefixes: [
    "Ael", "Syl", "Thar", "Lira", "Fael", "Ery", "Or", "Mar",
    "Brak", "Ul", "Khar", "Mor", "Thrak", "Vash", "Gor",
    "Var", "Zyr", "Mal", "Drex", "Rav", "Kael",
    "Xy", "Qir", "Za", "Ul", "Tek", "Ith", "Zy",
    "Kael", "Thos", "Om", "Amon", "Yss", "Rael"
  ],
  roots: [
    "mir", "lys", "ryn", "dor", "vin", "morth", "gar", "drax", "zor",
    "th", "ora", "iel", "syl", "rix", "qir", "ul", "ae", "thos", "amon",
    "nys", "ra", "el", "ka", "mir", "vash"
  ],
  suffixes: [
    "iel", "wyn", "thiel", "ra", "nys",
    "an", "or", "en", "ar",
    "ok", "rak", "gorn", "ash", "thor",
    "th", "vash", "zeth", "yx",
    "qir", "ul", "xae", "ith", "sh",
    "thos", "amon", "yrr", "ar", "iel"
  ]
};

function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateName() {
  let name = "";

  // Random 1-2 prefixes
  const numPrefixes = Math.random() < 0.7 ? 1 : 2;
  for (let i = 0; i < numPrefixes; i++) {
    name += randomChoice(affixes.prefixes);
  }

  // One root
  name += randomChoice(affixes.roots);

  // Random 1-2 suffixes
  const numSuffixes = Math.random() < 0.8 ? 1 : 2;
  for (let i = 0; i < numSuffixes; i++) {
    name += randomChoice(affixes.suffixes);
  }

  return name;
}

// Auto-update HTML element if it exists
function updateNameDisplay(elementId = "name") {
  const el = document.getElementById(elementId);
  if (el) el.textContent = generateName();
}

// Optional: make it global so you can call from HTML button
window.generateName = updateNameDisplay;
