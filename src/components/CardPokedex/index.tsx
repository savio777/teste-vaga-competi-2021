import React, { useState, useEffect, useCallback } from "react";
import api from "../../services/api";

import {
  capitalizeFirstLetter,
  getLinkSprite,
  paginationData,
} from "../../utils/helpers";
import CardPokemon from "../../components/CardPokemon";

import {
  Container,
  ContainerInputFilter,
  ContainerPokemons,
  TextError,
} from "./styles";

interface ItemPokemonTypes {
  name: string;
  url: string;
}

interface ItemPokemon {
  pokemon: ItemPokemonTypes;
  slot: number;
}

interface CardPokedexProps {
  setLoading(value: boolean): void;
}

const CardPokedex: React.FC<CardPokedexProps> = ({ setLoading }) => {
  const [listTypesPokemons, setListTypesPokemons] = useState<
    ItemPokemonTypes[]
  >([]);
  const [listPokemonsForTypes, setListPokemonsForTypes] = useState<
    ItemPokemonTypes[]
  >([]);

  const getPokemonsForType = useCallback(
    async (type: string) => {
      setLoading(true);

      try {
        const response = await api.get(`/type/${type}`);

        if (response.status === 200) {
          setListPokemonsForTypes([...response.data?.pokemon]);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    },
    [setLoading]
  );

  useEffect(() => {
    async function initialFunction() {
      setLoading(true);

      try {
        const response = await api.get("/type");

        if (response.status === 200) {
          setListTypesPokemons([...response.data?.results]);
          getPokemonsForType(response.data?.results[0]?.name);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    initialFunction();
  }, [setLoading, getPokemonsForType]);

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
        {paginationData({ data: listPokemonsForTypes }).length === 0 && (
          <TextError>Nenhum Pokemón para ser mostrado</TextError>
        )}
      </ContainerInputFilter>
      <ContainerPokemons>
        {paginationData({ data: listPokemonsForTypes }).map(
          (pokemonsForType) => (
            <CardPokemon
              namePokemon={capitalizeFirstLetter(pokemonsForType.pokemon?.name)}
              urlImage={getLinkSprite(pokemonsForType.pokemon?.url)}
            />
          )
        )}
      </ContainerPokemons>
    </Container>
  );
};

export default CardPokedex;
