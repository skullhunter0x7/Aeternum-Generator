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
  "Feather","Blade","Leaf","Rider","Song","Stone","Heart","Wing","Breeze","Fang",
  "Eye","Tide","Shard","Strike","Flame","Root","Bloom","Spark","Whisper","Shadow",
  "Crest","Glimmer","Haven","Drift","Light"
];

function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

function generateAethereName(gender){
  // Pick attribute + object
  let base = pick(aethPrefixes) + pick(aethObjects);
  
  // Keep it capitalized
  return base.charAt(0).toUpperCase() + base.slice(1);
}