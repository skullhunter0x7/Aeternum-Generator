// ---------- Aethere name logic ----------

// 50 attribute prefixes
const aethPrefixes = [
  "Light","Dark","Storm","Wind","Fire","Shadow","Moon","Sun","Iron","Star",
  "Night","Dawn","Dusk","Frost","Stone","Sky","Blood","Ash","Gold","Silver",
  "Crystal","Mist","Thunder","Rain","Ocean","Wave","Flame","Ice","Leaf","Root",
  "Dream","Soul","Spirit","Ember","Void","Nova","Rune","Echo","Glint","Shimmer",
  "Gale","Hollow","Blaze","Fang","Veil","Aurora","Pyre","Shade","Cinder","Spark"
];

// 25 object/endings
const aethObjects = [
  "feather","blade","leaf","rider","song","stone","heart","wing","breeze","fang",
  "eye","tide","shard","strike","flame","root","bloom","spark","whisper","shadow",
  "crest","glimmer","haven","drift","light"
];

function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

function generateAethereName(gender){
  // Pick attribute + object
  let base = pick(aethPrefixes) + pick(aethObjects);
  
  // Keep it capitalized
  return base.charAt(0).toUpperCase() + base.slice(1);
}