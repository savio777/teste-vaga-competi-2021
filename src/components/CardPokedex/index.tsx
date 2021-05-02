import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { capitalizeFirstLetter, getLinkSprite } from "../../utils/helpers";

import { Container, ContainerInputFilter, ContainerPokemons } from "./styles";

interface ItemPokemonTypes {
  name: string;
  url: string;
}

interface ItemPokemon {
  pokemon: ItemPokemonTypes;
  slot: number;
}

const CardPokedex: React.FC = () => {
  const [listTypesPokemons, setListTypesPokemons] = useState<
    ItemPokemonTypes[]
  >([]);
  const [listPokemonsForTypes, setListPokemonsForTypes] = useState<
    ItemPokemon[]
  >([]);

  async function getPokemonsForType(type: string) {
    const response = await api.get(`/type/${type}`);

    if (response.status === 200) {
      setListPokemonsForTypes([...response.data?.pokemon]);
    }
  }

  useEffect(() => {
    async function initialFunction() {
      const response = await api.get("/type");

      if (response.status === 200) {
        setListTypesPokemons([...response.data?.results]);
        getPokemonsForType(response.data?.results[0]?.name);
      }
    }

    initialFunction();
  }, []);

  return (
    <Container>
      <ContainerInputFilter>
        <p>filter</p>
        <select onChange={(e) => getPokemonsForType(e.target?.value)}>
          {listTypesPokemons.map((listTypes) => (
            <option value={listTypes.name}>
              {capitalizeFirstLetter(listTypes.name)}
            </option>
          ))}
        </select>
      </ContainerInputFilter>
      <ContainerPokemons>
        {listPokemonsForTypes.map((pokemonsForType) => (
          <>
            <p>teste {pokemonsForType.pokemon?.name}</p>
            <img
              src={getLinkSprite(pokemonsForType.pokemon?.url)}
              alt={pokemonsForType.pokemon?.name}
            />
          </>
        ))}
      </ContainerPokemons>
    </Container>
  );
};

export default CardPokedex;
