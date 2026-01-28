// affixnames.js
const syllables = {
  start: ["Al", "Ka", "Thar", "Eri", "Syl", "Lir", "Fa", "Mar", "Bran", "Ul", "Mor", "Va", "Zy", "Ra", "Om"],
  middle: ["rin", "dor", "mir", "lyn", "vin", "gar", "dra", "thil", "ora", "iel", "syl", "rix", "qir", "ul", "ae", "thon", "amon"],
  end: ["el", "ar", "ia", "wyn", "nys", "ok", "ash", "thor", "th", "yx", "ul", "sh", "yrr"]
};

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Combine syllables, remove duplicate letters at junctions
function generateSyllableName() {
  let start = randomChoice(syllables.start);
  let middle = randomChoice(syllables.middle);
  let end = randomChoice(syllables.end);

  // Clean overlapping letters
  if(start.slice(-1).toLowerCase() === middle.slice(0,1).toLowerCase()) middle = middle.slice(1);
  if(middle.slice(-1).toLowerCase() === end.slice(0,1).toLowerCase()) end = end.slice(1);

  const name = start + middle + end;
  return name.charAt(0).toUpperCase() + name.slice(1);
}

// Generate multiple names
function generateSyllableNames(count = 5) {
  const names = [];
  for(let i = 0; i < count; i++) names.push(generateSyllableName());
  return names;
}

// Hook into HTML
window.generateAffixNames = function(elementId = "affix-output", count = 5) {
  const output = document.getElementById(elementId);
  if(output) output.innerHTML = generateSyllableNames(count).join("<br>");
};
