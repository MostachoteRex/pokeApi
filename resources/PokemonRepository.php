<?php
require_once '../../config/database.php';

class PokemonRepository {
    private $conn;

    public function __construct() {
        $this->conn = Database::getConnection();
    }

    public function getAll() {
        $stmt = $this->conn->prepare('SELECT * FROM pokemons');
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getById($id) {
        $stmt = $this->conn->prepare('SELECT * FROM pokemons WHERE id = :id');
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function add($name, $tipo_pokemon, $tipo2_pokemon, $foto_pokemon) {
        $stmt = $this->conn->prepare('INSERT INTO pokemons (name, tipo_pokemon, tipo2_pokemon, foto_pokemon) VALUES (:name, :tipo_pokemon, :tipo2_pokemon, :foto_pokemon)');
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':tipo_pokemon', $tipo_pokemon);
        $stmt->bindParam(':tipo2_pokemon', $tipo2_pokemon);
        $stmt->bindParam(':foto_pokemon', $foto_pokemon);
        $stmt->execute();
    }

    public function update($id, $name, $tipo_pokemon, $tipo2_pokemon, $foto_pokemon) {
        if ($foto_pokemon) {
            $stmt = $this->conn->prepare('UPDATE pokemons SET name = :name, tipo_pokemon = :tipo_pokemon, tipo2_pokemon = :tipo2_pokemon, foto_pokemon = :foto_pokemon WHERE id = :id');
            $stmt->bindParam(':foto_pokemon', $foto_pokemon);
        } else {
            $stmt = $this->conn->prepare('UPDATE pokemons SET name = :name, tipo_pokemon = :tipo_pokemon, tipo2_pokemon = :tipo2_pokemon WHERE id = :id');
        }
        $stmt->bindParam(':id', $id);
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':tipo_pokemon', $tipo_pokemon);
        $stmt->bindParam(':tipo2_pokemon', $tipo2_pokemon);
        $stmt->execute();
    }

    public function delete($id) {
        $stmt = $this->conn->prepare('DELETE FROM pokemons WHERE id = :id');
        $stmt->bindParam(':id', $id);
        $stmt->execute();
    }
}
?>
