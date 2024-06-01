CREATE DATABASE pokemon_db;

USE pokemon_db;

CREATE TABLE pokemons (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    tipo_pokemon VARCHAR(255) NOT NULL,
    tipo2_pokemon VARCHAR(255) DEFAULT 'none',
    foto_pokemon LONGBLOB NOT NULL
);

INSERT INTO pokemons (name, tipo_pokemon, tipo2_pokemon, foto_pokemon) VALUES ('Bulbasaur', 'Grass', 'Poison', './public/img/bulbasaur.png');
INSERT INTO pokemons (name, tipo_pokemon, tipo2_pokemon, foto_pokemon) VALUES ('Charmander', 'Fire', 'none', './public/img/charmander.png');
INSERT INTO pokemons (name, tipo_pokemon, tipo2_pokemon, foto_pokemon) VALUES ('Squirtle', 'Water', 'none', './public/img/squirtle.png');
