//styles
import styles from "../styles/Welcome.module.css";

export default function Home() {
  return (
    <main className={styles.Welcome}>
      <button>
        <a href="/pokedex">Go to Pokedex</a>
      </button>

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
    </main>
  );
}
