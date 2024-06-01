<?php
require_once '../../infraestructure/repositories/PokemonRepository.php';

$id = $_POST['id'];
$name = $_POST['name'];
$tipo_pokemon = $_POST['tipo_pokemon'];
$tipo2_pokemon = $_POST['tipo2_pokemon'];
$foto_pokemon = isset($_FILES['foto_pokemon']) ? addslashes(file_get_contents($_FILES['foto_pokemon']['tmp_name'])) : null;

$pokemonRepository = new PokemonRepository();
$pokemonRepository->update($id, $name, $tipo_pokemon, $tipo2_pokemon, $foto_pokemon);

header('Location: /');
?>
