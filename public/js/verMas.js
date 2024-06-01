document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const pokemonId = params.get('id');

    if (pokemonId) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            .then(response => response.json())
            .then(data => mostrarDetalles(data));
    }

    function mostrarDetalles(pokemon) {
        const div = document.getElementById('pokemonDetalle');
        let tipos = pokemon.types.map(type => ` <p class="${type.type.name} tipo">${type.type.name}</p>`);
        tipos = tipos.join('');

        div.innerHTML = `
            <h1>${pokemon.name} (${pokemon.id})</h1>
            <img src="${pokemon.sprites.other["official-artwork"].front_shiny}" alt="${pokemon.name}">
            <div class="pokemon-tipos">
                ${tipos}
            </div>
            <p>Altura: ${pokemon.height}</p>
            <p>Peso: ${pokemon.weight}</p>
        `;

        document.getElementById('eliminarButton').onclick = function() {
            eliminarPokemon(pokemon.id);
        };
    }

    function eliminarPokemon(pokemonId) {
        if (confirm('¿Estás seguro de que quieres eliminar este Pokémon?')) {
            fetch(`path/to/your/backend/api/${pokemonId}`, {
                method: 'DELETE'
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Pokémon eliminado con éxito');
                    window.location.href = 'index.html';
                } else {
                    alert('Hubo un error al eliminar el Pokémon');
                }
            })
            .catch(error => console.error('Error:', error));
        }
    }
});
