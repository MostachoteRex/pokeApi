document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const pokemonId = params.get('id');

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(response => response.json())
        .then(pokemon => {
            document.getElementById('name').value = pokemon.name;
            document.getElementById('tipo_pokemon').value = pokemon.types[0].type.name;
            document.getElementById('tipo2_pokemon').value = pokemon.types[1]?.type.name || '';
            // Add more fields as needed
        });

    document.getElementById('editPokemonForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(this);
        const name = formData.get('name');
        const tipo_pokemon = formData.get('tipo_pokemon');
        const tipo2_pokemon = formData.get('tipo2_pokemon');

        fetch(`path/to/your/backend/api/${pokemonId}`, {
            method: 'PUT',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Pokémon editado con éxito');
                window.location.href = 'index.html';
            } else {
                alert('Hubo un error al editar el Pokémon');
            }
        })
        .catch(error => console.error('Error:', error));
    });
});
