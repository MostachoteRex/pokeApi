<?php
require_once '../../resources/PokemonRepository.php';

$id = $_POST['id'];

$pokemonRepository = new PokemonRepository();
$pokemonRepository->delete($id);

header('Location: /');
?>
