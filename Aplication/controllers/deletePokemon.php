<?php
require_once '../../infraestructure/repositories/PokemonRepository.php';

$id = $_POST['id'];

$pokemonRepository = new PokemonRepository();
$pokemonRepository->delete($id);

header('Location: /');
?>
