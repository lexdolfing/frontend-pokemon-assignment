import React, {useEffect, useState} from 'react'
import './PokemonCard.css'
import axios from "axios";
import {logDOM} from "@testing-library/react";


function PokemonCard({pokemonUrl}) {
    const [pokemon, setPokemon] = useState({});

    useEffect( () => {
    async function fetchSinglePokemonData() {
        try {
            const response = await axios.get(pokemonUrl);
            setPokemon(response.data)
        } catch(e) {
            console.error(e)
        }
    }

    if (pokemonUrl) {
    void fetchSinglePokemonData() }

}, [pokemonUrl]);
    

    return(
        <div>
            {Object.keys(pokemon).length > 0 &&
            <article className="pokemonCard">
            <h3>{pokemon.name}</h3>
                <p>{pokemon.height}</p>

            <img src={pokemon.sprites.front_default} alt="Bulbasaur"/>

            <p>Moves: {pokemon.moves.length}</p>
            <p>Weight: {pokemon.weight}</p>
                <p>Abilities:</p>
                <ul className="abilities">
                {pokemon.abilities.map((ability) => {
                    return (
                        <li key={ability.ability.name}>{ability.ability.name}</li>
                    )
                })}
                </ul>

        </article>
            }
        </div>
    )
}

export default PokemonCard