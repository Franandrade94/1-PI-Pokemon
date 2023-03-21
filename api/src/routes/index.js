const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonRouter = require('./pokemon.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/pokemons', pokemonRouter.getAll);
router.get('/pokemons/:id', pokemonRouter.getPokemonDetail);
router.post('/pokemons', pokemonRouter.createPokemon);
router.get('/types', pokemonRouter.getTypes);




module.exports = router;
