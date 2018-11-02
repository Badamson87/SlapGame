let health = 100;

let myName = "Rocky Mountain King";

let hits = 0;

function stump() {
  health--
  hits++
  update()
}

function rock() {
  health -= 5
  hits++
  update()
}

function slide() {
  health -= 10
  hits++
  update()
}

function update() {
  document.getElementById("health").innerText = health.toString()
  document.getElementById("myName").innerText = myName.toString()
  document.getElementById("hits").innerText = hits.toString()
}

update()
