//components
import { resolveHref } from 'next/dist/shared/lib/router/router';
import { useEffect } from 'react';

//styles
import styles from '../styles/PokeCard.module.css';

//colorScheme
import colorScheme from '../styles/themes/colorScheme';

export default function PokeCard({id, name, types, image}) {
    //id
    const handleID = () => {
        if(id >= 1 && id <= 9) {
            return '00' + id
        } else if(id >= 10 && id <= 99) {
            return '0' + id;
        } else {
            return id;
        }
    }
    
    return (
        <section className={styles.PokeCard} 
                   style={{backgroundColor: colorScheme.colors.BGCard[types[0].type.name]}}>

            <article className={styles.PokemonINFO}>
                <h1 style={{color: colorScheme.colors.BOXCard[types[0].type.name]}}>#{handleID()}</h1>
                <h2>{name}</h2>

                {types[1] ? (
                    <article>
                        <span style={{backgroundColor: colorScheme.colors.BOXCard[types[0].type.name]}}>{types[0].type.name}</span>
                        <span style={{backgroundColor: colorScheme.colors.BOXCard[types[1].type.name]}}>{types[1].type.name}</span>
                    </article>
                ) : (
                    <article >
                        <span style={{backgroundColor: colorScheme.colors.BOXCard[types[0].type.name]}}>{types[0].type.name}</span>
                    </article>
                )} 
            </article>
            
            <img src={image} alt={name + ' image'} />
            
        </section>
    )
}