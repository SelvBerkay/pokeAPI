const pokecontainer = document.querySelector(".pokecontainer")
const pokeinput = document.querySelector("#pokeinput")

let pokenumber = 50;


async function poke() {
  for (let index = 1; index <= pokenumber; index++) {
    await getPoke(index)  
}
}


async function getPoke(id) {
   let APIurl = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  let res = await APIurl.json()
  createPoke(res)
}

function createPoke(pokemon) {
  let name = pokemon.name
  let pokeid = pokemon.id
  
  let pokebox = document.createElement("div")
  pokebox.classList.add("pokebox")
  pokebox.innerHTML = `
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokeid}.png" alt="" id="imgpoke">
      <p id="idpoke">${pokeid}</p>
      <p id="pokename">${name}</p>  
  
  `
  pokecontainer.appendChild(pokebox)
}

poke()

pokeinput.addEventListener("input", () => {
  const pokemons = document.querySelectorAll("#pokename")
  const search = pokeinput.value.toLowerCase()

  pokemons.forEach(pokeName => {
    pokeName.parentElement.style.display = "block"

    if (!pokeName.innerHTML.toLowerCase().includes(search)) {
      pokeName.parentElement.style.display = "none"
    }
  });
})

