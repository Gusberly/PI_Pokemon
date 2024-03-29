import axios from "axios";

export const getPokemon = () => {
  return async function (dispatch) {
    try {
      var pokemon = await axios.get("http://localhost:3001/pokemons");
      console.log(pokemon);
      return dispatch({
        type: "GET_POKEMONS",
        payload: pokemon.data,
      });
    } catch (error) {
      console.log("este es el error", error);
    }
  };
};

// export const getPokemon = () => {
//   return function (dispatch) {
//     axios
//       .get("http://localhost:3001/pokemons")
//       .then((pokemon) => {
//         dispatch({
//           type: "GET_POKEMONS",
//           payload: pokemon.data,
//         });
//       })
//       .catch((error) => console.log(error));
//   };
// };

export const getPokemonId = (id) => {
  return async function (dispatch) {
    try {
      let pokeId = await axios.get(`http://localhost:3001/pokemons/${id}`);
      console.log(pokeId);
      return dispatch({
        type: "GET_POKE_ID",
        payload: pokeId.data,
      });
    } catch (error) {
      console.log("error id", error);
    }
  };
};

export const getTypes = () => {
  return async function (dispatch) {
    try {
      let types = await axios.get("http://localhost:3001/types");
      return dispatch({
        type: "GET_TYPES",
        payload: types.data,
      });
    } catch (error) {
      console.log("error types", error);
    }
  };
};

export const postPokemon = (payload) => {
  return async function (dispatch) {
    try {
      const crearPokemon = await axios.post(
        "http://localhost:3001/pokemon",
        payload
      );
      return crearPokemon;
    } catch (error) {
      console.log("error al crear pokemon", error);
    }
  };
};

export const pokeCreacion = (payload) => {
  return {
    type: "POKE_CREADO",
    payload,
  };
};

export const pokeFilter = (tipo, origen) => {
  return {
    type: "FILTRO_POR_TIPO",
    payload: { tipo, origen },
  };
};

export const ordenDePokemon = (ordenar) => {
  return {
    type: "ORDENAR_POKEMON",
    payload: ordenar,
  };
};

export const buscarPokemon = (name) => {
  return {
    type: "BUSCAR_POKEMON",
    payload: name,
  };
};

export const limpioDetalle = () => {
  return {
    type: "LIMPIAR_DETALLE",
  };
};
