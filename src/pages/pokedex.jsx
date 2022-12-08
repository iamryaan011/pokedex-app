//axios
import axios from "axios";

//hooks
import { useState, useEffect } from "react";

//styles
import styles from "../styles/Pokedex.module.css";

//components
import PokeCard from "../components/PokeCard";

//api's
//names, types and other informations: "https://pokeapi.co/api/v2/pokemon/1/"
//img's: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png;

export default function PokedexPAGE() {
  //hooks
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsENDPOINTS, setPokemonsENDPOINTS] = useState(20)

  useEffect(() => {
    getPokemons();
  });

  //get more pokemon
  const getMorePokemons = () => {
    if(pokemonsENDPOINTS >= 151) {
      setPokemonsENDPOINTS(151)
    } else {
      setPokemonsENDPOINTS((value) => value += 20)
    }
  }
  
  //get pokemon
  const getPokemons = () => {
    var endpoints = [];

    for (var i = 1; i <= pokemonsENDPOINTS; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }

    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.Container}>
      <header>
        <h1>
          Pokedex
        </h1>

        <nav>
          <a href="../">Welcome</a>
        </nav>
      </header>

      <section className={styles.Pokedex}>
        {pokemons.map((pokemon, key) => (
          <div key={key}>
            <PokeCard
              id={pokemon.data.id}
              name={pokemon.data.name}
              types={pokemon.data.types}
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                key + 1
              }.png`}
            />
          </div>
        ))}
      </section>

      {pokemonsENDPOINTS === 151 ? '' : (
          <button onClick={() => getMorePokemons()}>More</button>
        )}

      <footer>
        Website created by{" "}
        <a href="https://www.instagram.com/iamryaan011/" target="blank">
          @iamryaan011
        </a>{" "}
        with{" "}
        <a href="https://pokeapi.co/" target="blank">
          PokeAPI
        </a>
      </footer>
    </div>
  );
}
