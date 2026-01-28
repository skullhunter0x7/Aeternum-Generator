// ---------- Affix sets ----------
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

// ---------- Helper ----------
function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// ---------- Generate a single affix name ----------
function generateAffixName() {
  let name = "";

  // Random 1–2 prefixes
  const numPrefixes = Math.random() < 0.7 ? 1 : 2;
  for (let i = 0; i < numPrefixes; i++) {
    name += randomChoice(affixes.prefixes);
  }

  // One root
  name += randomChoice(affixes.roots);

  // Random 1–2 suffixes
  const numSuffixes = Math.random() < 0.8 ? 1 : 2;
  for (let i = 0; i < numSuffixes; i++) {
    name += randomChoice(affixes.suffixes);
  }

  // Capitalize first letter
  return name.charAt(0).toUpperCase() + name.slice(1);
}

// ---------- Generate multiple names ----------
function generateAffixNames(count = 5) {
  const names = [];
  for (let i = 0; i < count; i++) {
    names.push(generateAffixName());
  }
  return names;
}

// ---------- HTML Integration ----------
document.getElementById("affix-generate-btn")?.addEventListener("click", () => {
  const countInput = document.getElementById("affix-count");
  const output = document.getElementById("affix-output");
  const count = parseInt(countInput.value) || 5;
  const names = generateAffixNames(count);
  if(output) output.innerHTML = names.join("<br>");
});
