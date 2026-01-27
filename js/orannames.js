// ---------- Oran Female Praenomina / First Names ----------
const oranFemaleFirstNames = [
  "Aemilia","Agrippina","Antonia","Appia","Aurelia","Baebia","Calpurnia","Claudia","Cornelia","Domitia",
  "Fabia","Flavia","Fulvia","Helvia","Horatia","Julia","Licinia","Livia","Lucretia","Manlia",
  "Marcia","Octavia","Papiria","Pomponia","Porcia","Scribonia","Sempronia","Servilia","Valeria","Vibia",
  "Agraria","Albia","Annia","Antistia","Appuleia","Atilia","Avidia","Calvia","Camilla","Cecilia",
  "Claudilla","Cluvia","Curvia","Fannia","Fundania","Gavia","Hostilia","Iunia","Junia","Labiena",
  "Livilla","Lucia","Lollia","Mamilia","Matidia","Messalla","Minucia","Nervia","Numisia","Oppia",
  "Orbilia","Petronia","Plautia","Postumia","Quintilia","Rubria","Salvia","Sulpicia","Titia","Vergilia",
  "Veturia","Vitellia","Volumnia","Aelia","Aemiliana","Agrippia","Fabiana","Flaminia","Lucilla",
  "Marcella","Sextia","Vibiana","Vipsania","Fabiola","Servilia"
];

// ---------- Oran Male Praenomina / First Names ----------
const oranMaleFirstNames = [
  "Aulus","Appius","Gaius","Gnaeus","Decimus","Publius","Quintus","Lucius","Marcus","Sextus",
  "Tiberius","Titus","Tullius","Spurius","Servius","Numerius","Aemilius","Aurelius","Cornelius","Claudius",
  "Fabius","Flavius","Julius","Livius","Pompeius","Valerius","Sulpicius","Quinctius","Manius","Paullus",
  "Gaiulus","Marcellus","Caius","Paulus","Octavius","Severus","Maximus","Atilius","Licinius","Tertius",
  "Vibius","Appuleius","Albinus","Balbus","Cato","Crispus","Drusus","Faustus","Gordian","Gracchus",
  "Hadrian","Horatius","Laelius","Lentulus","Lucullus","Marius","Nero","Nerva","Otho","Pomponius",
  "Probus","Regulus","Scipio","Seneca","Severianus","Tarquinius","Terentius","Traianus","Vitellius",
  "Agrippa","Antonius","Balbinus","Brutus","Caecilius","Calpurnius","Capito","Cassius","Celsus",
  "Cornelianus","Domitius","Ennius","Fannius","Florus","Fundanius","Galerius","Gellius","Helvidius",
  "Junius","Labienus","Macer","Martialis","Mucius","Naevius","Ovidius","Paullinus","Petronius",
  "Plautius","Pompeianus","Porcius","Quinctilius","Rufus","Scribonius","Sempronius","Servilius",
  "Sextilianus","Silius","Statius","Suetonius","Tacitus","Tertullianus","Valerianus"
];

// ---------- Oran Last Names / Cognomina ----------
const oranLastNames = [
  "Ahenobarbus","Aquila","Aurelius","Balbus","Brutus","Caecus","Cato","Celsus","Cicero","Claudius",
  "Cornelius","Crispus","Drusus","Faustus","Fabius","Flaccus","Flavius","Fronto","Gellius","Gracchus",
  "Hadrianus","Horatius","Julius","Laelius","Lentulus","Licinius","Livius","Lucullus","Macrinus","Manlius",
  "Marcellus","Martialis","Maximus","Nero","Nerva","Octavius","Paullus","Petronius","Plautius","Pompeius",
  "Porcius","Quinctilianus","Rufus","Scipio","Sempronius","Severus","Servilius","Sextus","Silius","Spurius",
  "Statius","Suetonius","Tacitus","Tertius","Tullius","Valerius","Varro","Vibius","Vitruvius","Agrippa",
  "Antonius","Appuleius","Balbinus","Caecilius","Calpurnius","Capito","Cassianus","Celsus","Claudius",
  "Cornelianus","Domitius","Ennius","Fundanius","Galerius","Helvidius","Lucianus","Marcellinus","Martianus",
  "Ovidianus","Pompeianus","Servilianus","Tertullian","Vitellianus"
];

// ---------- Helper Functions ----------
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function getRandomOranFemale() {
  return pick(oranFemaleFirstNames) + " " + pick(oranLastNames);
}

function getRandomOranMale() {
  return pick(oranMaleFirstNames) + " " + pick(oranLastNames);
}

// ---------- Optional: Generate multiple ----------
function getRandomOranFemales(count = 5) {
  const names = [];
  for(let i = 0; i < count; i++) names.push(getRandomOranFemale());
  return names;
}

function getRandomOranMales(count = 5) {
  const names = [];
  for(let i = 0; i < count; i++) names.push(getRandomOranMale());
  return names;
}

// Example usage:
// console.log(getRandomOranFemale());
// console.log(getRandomOranMales(10));