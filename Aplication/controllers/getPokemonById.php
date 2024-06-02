<?php
require_once '../../resources/PokemonRepository.php';

$id = $_GET['id'];

$pokemonRepository = new PokemonRepository();
$pokemon = $pokemonRepository->getById($id);

header('Content-Type: application/json');
echo json_encode($pokemon);
?>
