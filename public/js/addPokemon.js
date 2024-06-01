// add-pokemon.js
document.getElementById('addPokemonForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const name = formData.get('name');
    const tipo_pokemon = formData.get('tipo_pokemon');
    const tipo2_pokemon = formData.get('tipo2_pokemon');
    const foto_pokemon = formData.get('foto_pokemon');

    fetch('path/to/your/backend/api', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Pokémon añadido con éxito');
            window.location.href = 'index.html';
        } else {
            alert('Hubo un error al añadir el Pokémon');
        }
    })
    .catch(error => console.error('Error:', error));
});
