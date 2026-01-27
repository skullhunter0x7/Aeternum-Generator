// realnames.js
async function generateRealNames(count, gender="all"){
  try {
    let apiURL = `https://randomuser.me/api/?results=${count}&inc=name&nat=us,gb,ca,au,nz`;
    if(gender!=="all") apiURL += `&gender=${gender}`;
    const res = await fetch(apiURL);
    const data = await res.json();
    return data.results.map(u => `${u.name.first} ${u.name.last}`);
  } catch(err){
    return ["Error: "+err.message];
  }
}