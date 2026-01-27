// ---------------- Terradine Logic ----------------

// Syllables & suffixes
const onsets = ["d","t","k","n","m","l","r","s","th","v"];
const vowels = ["a","e","i","o","u"];
const codas = ["l","n","r","m","k","s","d","v"];

const maleSuffixes = ["'r","'k","'s","'l","'n","ron","ar","rik","vek","ald","rak","isk","lan'r"];
const femaleSuffixes = ["'ra","ral","raka","'ka","ara","'sa","sha","'la","lin","'na","ae","yn"];
const rareFemaleSuffixes = ["'ra'ia","'ka'ia","'sa'ia","'la'ia","'na'ia"];

// ---------- Utility ----------
function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

function makeSyllable(allowCoda = true){
  let s = pick(onsets) + pick(vowels);
  if(allowCoda && Math.random()<0.5) s += pick(codas);
  return s;
}

// ---------- Terradine Names ----------
function generateTerradineName(gender){
  let syllableCount = Math.random()<0.7 ? 1 : 2;
  let base = "";
  for(let i=0;i<syllableCount;i++) base += makeSyllable(i===0);

  let activeSuffixes = gender==="female"? [...femaleSuffixes] : [...maleSuffixes];
  let suffix = pick(activeSuffixes);

  // 1% chance for rare female combos
  if(gender==="female" && Math.random()<0.01){
    suffix = pick(rareFemaleSuffixes);
  }

  // prevent collision
  const lastBaseChar = base.slice(-1);
  const firstSuffixChar = suffix.replace(/'/g,"").charAt(0);
  if(lastBaseChar === firstSuffixChar) base = base.slice(0,-1);

  let name = base + suffix;
  name = name.replace(/[cC]/g,"")
             .replace(/([aeiou])\1/g,"$1")
             .replace(/el'l/g,"el")
             .toLowerCase();
  return name.charAt(0).toUpperCase() + name.slice(1);
}

// ---------- Custom Base + Suffix ----------
function generateTerradineSuffixes(base, gender){
  let b = base.replace(/[cC]/g,"").toLowerCase();
  let activeSuffixes = gender==="female"? [...femaleSuffixes] : [...maleSuffixes];
  if(gender==="female" && Math.random()<0.01){
    activeSuffixes = activeSuffixes.concat(rareFemaleSuffixes);
  }

  const results = activeSuffixes.map(suffix=>{
    let tmp = b;
    const last = tmp.slice(-1);
    const first = suffix.replace(/'/g,"").charAt(0);
    if(last===first) tmp = tmp.slice(0,-1);
    let name = (tmp + suffix).replace(/el'l/g,"el");
    return name.charAt(0).toUpperCase() + name.slice(1);
  });
  return results;
}