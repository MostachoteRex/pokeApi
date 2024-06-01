const listaPokemon = document.querySelector("#listaPokemon");
let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 1000; i++) {
    fetch(URL + i)
        .then((response) => response.json())
        .then(data => mostrarPokemon(data));
}

function mostrarPokemon(pokemon) {
    let tipos = pokemon.types.map(type => ` <p class="${type.type.name} tipo">${type.type.name}</p>`);
    tipos = tipos.join('');

    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
        <p class="pokemon-id-back">00${pokemon.id}</p>
        <div class="pokemon-imagen">
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        </div>
        <div class="pokemon-info">
            <div class="nombre-contenedor">
                <p class="pokemon-id">#${pokemon.id}</p>
                <h2 class="pokemon-nombre">${pokemon.name}</h2>
            </div>
            <button class="ver-mas" onclick="verMas(${pokemon.id})">Ver más</button>
        </div>
    `;
    listaPokemon.append(div);
}

function verMas(id) {
    window.location.href = `ver-mas.html?id=${id}`;
}

document.addEventListener('DOMContentLoaded', () => {
    fetchPokemonList();
});

let currentPokemonList = [];

function fetchPokemonList() {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
        .then(response => response.json())
        .then(data => {
            const pokemonURLs = data.results.map(pokemon => pokemon.url);
            const promises = pokemonURLs.map(url =>
                fetch(url)
                    .then(response => response.json())
            );

            Promise.all(promises)
                .then(pokemonDetails => {
                    currentPokemonList = pokemonDetails;
                    displayPokemonList(currentPokemonList);
                })
                .catch(error => console.error('Error fetching Pokémon details:', error));
        })
        .catch(error => console.error('Error fetching the Pokémon list:', error));
}

function displayPokemonList(pokemonList) {
    const listaPokemon = document.getElementById('listaPokemon');
    listaPokemon.innerHTML = ''; // Clear any existing content

    pokemonList.forEach(pokemon => {
        const pokemonElement = document.createElement('div');
        pokemonElement.classList.add('pokemon');

        pokemonElement.innerHTML = `
            <div class="pokemon-imagen">
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            </div>
            <div class="pokemon-info">
                <div class="nombre-contenedor">
                    <span class="pokemon-id">#${pokemon.id}</span>
                    <span class="pokemon-nombre">${pokemon.name}</span>
                </div>
                <button class="ver-mas" onclick="verMas(${pokemon.id})">Ver más</button>
            </div>
        `;

        listaPokemon.appendChild(pokemonElement);
    });
}

function verMas(pokemonId) {
    window.location.href = `ver-mas.html?id=${pokemonId}`;
}

function sortPokemonList() {
    const sortOption = document.getElementById('sortOptions').value;
    let sortedList = [...currentPokemonList];

    switch (sortOption) {
        case 'numberAsc':
            sortedList.sort((a, b) => a.id - b.id);
            break;
        case 'numberDesc':
            sortedList.sort((a, b) => b.id - a.id);
            break;
        case 'nameAsc':
            sortedList.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'nameDesc':
            sortedList.sort((a, b) => b.name.localeCompare(a.name));
            break;
    }
    displayPokemonList(sortedList);
}

function filterPokemonList() {
    const type = document.getElementById('filterType').value;
    const move = document.getElementById('filterMove').value;

    let filteredList = currentPokemonList.filter(pokemon => {
        let matchesType = type === '' || pokemon.types.some(t => t.type.name === type);
        let matchesMove = move === '' || pokemon.moves.some(m => m.move.name === move);

        return matchesType && matchesMove;
    });

    displayPokemonList(filteredList);
}

function editarPokemon(pokemonId) {
    window.location.href = `editar-pokemon.html?id=${pokemonId}`;
}

