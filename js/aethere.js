// ---------- Aethere name logic ----------

// ~100 attribute prefixes (single words only)
const aethPrefixes = [
  "Light","Dark","Storm","Wind","Fire","Shadow","Moon","Sun","Iron","Star",
  "Night","Dawn","Dusk","Frost","Stone","Sky","Blood","Ash","Gold","Silver",
  "Crystal","Mist","Thunder","Rain","Ocean","Wave","Flame","Ice","Leaf","Root",
  "Dream","Soul","Spirit","Ember","Void","Nova","Rune","Echo","Glint","Shimmer",
  "Gale","Hollow","Blaze","Fang","Veil","Aurora","Pyre","Shade","Cinder","Spark",
  "Twilight","Radiance","Phantom","Whisper","Steel","Smoke","Dust","Thorn","Snow",
  "Quartz","Cloud","Bright","Pale","Shine","Glow","Sparkle","Misty","Glimmer",
  "Shard","Brim","Flicker","Drift"
];

// ~50 object/endings
const aethObjects = [
  "feather","blade","leaf","rider","song","stone","heart","wing","breeze","fang",
  "eye","tide","shard","strike","flame","root","bloom","spark","whisper","shadow",
  "crest","glimmer","haven","drift","light","horn","claw","veil","spire","branch",
  "scale","petal","trail","gale","crown","thorn","ash","dust","ember","ice",
  "frost","wave","mist","quill","beam","star","ray"
];

function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

function generateAethereName(gender){
  // Pick a random attribute and object
  let base = pick(aethPrefixes) + pick(aethObjects);

  // Keep first letter capitalized, the rest lowercase
  return base.charAt(0).toUpperCase() + base.slice(1).toLowerCase();
}