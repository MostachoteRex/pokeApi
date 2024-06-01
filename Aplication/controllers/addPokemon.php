<?php
require_once '../../infraestructure/repositories/PokemonRepository.php';

$name = $_POST['name'];
$tipo_pokemon = $_POST['tipo_pokemon'];
$tipo2_pokemon = $_POST['tipo2_pokemon'];
$foto_pokemon = addslashes(file_get_contents($_FILES['foto_pokemon']['tmp_name']));

$pokemonRepository = new PokemonRepository();
$pokemonRepository->add($name, $tipo_pokemon, $tipo2_pokemon, $foto_pokemon);

header('Location: /');
?>
