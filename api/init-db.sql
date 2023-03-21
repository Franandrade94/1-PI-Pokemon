CREATE database pokemondb;

CREATE TABLE pokemons (
	_id SERIAL PRIMARY KEY,
	hp FLOAT  NOT NULL,
	name VARCHAR   NOT NULL,
	attack FLOAT  NOT NULL,
	defense FLOAT  NOT NULL,
	speed FLOAT  NOT NULL,
	height FLOAT  NOT NULL,
	weight FLOAT  NOT NULL,
	type VARCHAR ( 50 )  NOT NULL,
	image VARCHAR ( 200 )  NOT NULL
);



