const card = document.querySelector('.card');
const generateNew = document.getElementById('btn');
generateNew.addEventListener('click', generatePokemon);

const url = 'https://pokeapi.co/api/v2/pokemon/';

const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
  };


async function generatePokemon(id) {
    const randomNumber = Math.floor(Math.random() * 150) + 1
    id = randomNumber;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    const pokemon = await res.json();
    console.log(pokemon)
    card.innerHTML = "";

    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon')
    const themeColor = typeColor[pokemon.types[0].type.name];
/*     card.style.backgroundColor = themeColor */

    const pokeName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const pokeType = pokemon.types[0].type.name[0].toUpperCase() + pokemon.types[0].type.name.slice(1);

    card.style.background = `radial-gradient(circle at 50% 0%, ${themeColor} 36%, #ffffff 36%)`;

    pokemonEl.innerHTML = `<div class="info">
    <div class=shape-left style="border-color: transparent transparent transparent ${themeColor}"></div>
    <div class=shape-right style="border-color: transparent transparent ${themeColor} transparent"></div>
    <div class="pokemon-header">
    <a href="https://pokemon.fandom.com/wiki/${pokeName}" target="_blank"><h2>${pokeName}</h2></a>
    <span class="pokemon-number">#${pokemon.id}</span>
    </div>
    <div class="img-container">
    <img id="pokemonImg" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg">
    </div>
    <div class="pokemon-content">
    <span class="pokemon-type" style="background-color: ${themeColor}">${pokeType}</span>
    <span class=hp-stats><i class="fa-solid fa-heart"></i>HP: ${pokemon.stats[0].base_stat}</span>
    <span class=hp-stats><i class="fa-solid fa-hand-fist"></i>Attack: ${pokemon.stats[1].base_stat}</span>
    <span class=hp-stats><i class="fa-solid fa-shield-halved"></i>Defence: ${pokemon.stats[2].base_stat}</span>
    </div>
    </div>`
    card.appendChild(pokemonEl)

    document.title = `Pokemon generator - ${pokeName}`
}
generatePokemon()