
let rmk = {
  health: 100,
  name: "Rocky Mountain King",
  hits: 0,
  items: []
}

let totalMods = 0;
let saying = "Nice Sled!"


let items = {
  decals: { name: "decals", modifier: 1, description: "Cool stickers bro!" },
  skis: { name: "skis", modifier: 2, description: "Both of them?" },
  pipes: { name: "pipes", modifier: 3, description: "She sounds mean!" }


}

function stump() {
  let damageTaken = 1 - totalMods;
  rmk.health -= Math.max(0, damageTaken);
  rmk.hits++
  saying = "Darn Trees anyway"
  update()
}

function rock() {
  let damageTaken = 5 - totalMods;
  rmk.health -= Math.max(0, damageTaken);
  rmk.hits++
  saying = "That's a big one"
  update()
}

function slide() {
  let damageTaken = 10 - totalMods;
  rmk.health -= Math.max(0, damageTaken);
  rmk.hits++
  saying = "Better scoot"
  update()
}

function reset() {
  rmk.health = 100;
  rmk.hits = 0;
  totalMods = 0;
  saying = "How about another"
  update()
}

function giveDecals() {
  totalMods++
  saying = items.decals.description
  update()
}
function giveSkis() {
  totalMods += 2
  saying = items.skis.description
  update()
}
function givePipes() {
  totalMods += 3
  saying = items.pipes.description
  update()
}




function update() {
  document.getElementById("health").innerText = rmk.health.toString()
  document.getElementById("myName").innerText = rmk.name.toString()
  document.getElementById("hits").innerText = rmk.hits.toString()
  document.getElementById("healthBar").style.width = rmk.health + "%"
  document.getElementById("saying").innerText = saying.toString()
}



update()
