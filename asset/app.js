
let rmk = {
  health: 100,
  name: "Rocky Mountain King",
  hits: 0,
  items: []
}

let ac = {
  health: 90,
  name: "Snow Kitten",
  hits: 0,
  items: []
}

let sd = {
  health: 80,
  name: "ski doo",
  hits: 0,
  items: []
}

let items = {
  decals: { name: "decals", modifier: 1, description: "Cool stickers bro!" },
  skis: { name: "skis", modifier: 2, description: "Both of them?" },
  pipes: { name: "pipes", modifier: 3, description: "She sounds mean!" }


}

function stump() {
  let damageTaken = 1 - totalMods;
  rmk.health -= Math.max(0, damageTaken);
  rmk.hits++
  update()
}

function rock() {
  let damageTaken = 5 - totalMods;
  rmk.health -= Math.max(0, damageTaken);
  rmk.hits++
  update()
}

function slide() {
  let damageTaken = 10 - totalMods;
  rmk.health -= Math.max(0, damageTaken);
  rmk.hits++
  update()
}

function reset() {
  rmk.health = 100;
  rmk.hits = 0;
  totalMods = 0;
  update()
}

let totalMods = 0;
let saying = "Sweet ride"

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
