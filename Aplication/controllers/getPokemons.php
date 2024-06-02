<?php
require_once '../../resources/PokemonRepository.php';

$pokemonRepository = new PokemonRepository();
$pokemons = $pokemonRepository->getAll();

header('Content-Type: application/json');
echo json_encode($pokemons);
?>
