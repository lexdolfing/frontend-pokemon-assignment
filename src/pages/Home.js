import React, {useEffect, useLayoutEffect, useState} from 'react';
import axios from 'axios';
import './Home.css'
import PokemonCard from "../components/pokemonCard/PokemonCard"
import Button from "../components/button/Button";

export default function Home() {
    const [pokemonList, setPokemonList] = useState([]);
    const [endpoint, setEndpoint] = useState(`https://pokeapi.co/api/v2/pokemon`);
    const [pokemonOverview, setPokemonOverview] = useState('');

    useEffect(() => {
        async function fetchAllPokemon() {
            try {
                const response = await axios.get(endpoint);
                setPokemonList(response.data.results);
                setPokemonOverview(response.data);
                console.log(response.data.results)
                console.log(response.data)
            } catch (e) {
                console.error(e)
            }
        }

        void fetchAllPokemon();
    }, [endpoint])

    return (
        <>

            <div className="body">
                <h1>POKEMON</h1>
                <article className="button-container">
                    <Button direction="Vorige" disabled={!pokemonOverview.previous}
                            onClick={() => setEndpoint(pokemonOverview.previous)}
                    >
                    </Button>

                    <Button direction="Volgende" disabled={!pokemonOverview.next}
                            onClick={() => setEndpoint(pokemonOverview.next)}
                    ></Button>
                </article>
                <ul className="pokemonCard-container">
                    {pokemonList.map((pokemon => {
                        return (
                            <PokemonCard pokemonUrl={pokemon.url} key={pokemon.name}/>
                        )
                    }))}
                </ul>
            </div>
        </>


    );


}