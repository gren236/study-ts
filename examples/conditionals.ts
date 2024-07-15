interface PokemonResults {
    count: number;
    next?: string;
    previous?: string;
    results: {
        name: string;
        url: string;
    }[];
}

type FetchPokemonResult<T> = T extends undefined ? Promise<PokemonResults> : void;

function fetchPokemon<T extends undefined | ((data: PokemonResults) => void)>(
    url: string,
    callback?: T
): FetchPokemonResult<T> {
    if (callback) {
        fetch(url)
            .then(resp => resp.json())
            .then(callback)

        return undefined as FetchPokemonResult<T>;
    } else {
        return fetch(url).then(resp => resp.json()) as FetchPokemonResult<T>;
    }
}

// fetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=10", (data) => {
//     data.results.forEach((pokemon) => {
//         console.log(pokemon.name);
//     })
// });

(async function() {
    const data = <PokemonResults>(await fetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=10"));

    data.results.forEach((pokemon) => {
        console.log(pokemon.name);
    })
})()