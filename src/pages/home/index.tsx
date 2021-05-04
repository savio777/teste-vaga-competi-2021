import React, { useCallback, useEffect, useState } from "react";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import Footer from "../../components/footer";
import Header from "../../components/header";
import CardPokedex from "../../components/CardPokedex";
import CardPokemon from "../../components/CardPokemon";

import api from "../../services/api";
import { capitalizeFirstLetter, getLinkSprite } from "../../utils/helpers";

import { Container, PokemonRandomContainer, Circle } from "./styles";

interface ItemPokemonTypes {
  name: string;
  url: string;
}

const limit = 5;

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [offsetRandomPokemons, setOffsetRandomPokemons] = useState(0);
  //const [limitRandomPokemons, setLimitRandomPokemons] = useState(5);
  const [totalPokemons, setTotalPokemons] = useState(0);
  const [listRandomPokemons, setListRandomPokemons] = useState<
    ItemPokemonTypes[]
  >([]);

  const getPokemonsRandom = useCallback(async () => {
    setLoading(true);

    try {
      const response = await api.get("/pokemon/", {
        params: { offset: offsetRandomPokemons, limit },
      });

      if (response.status === 200) {
        setListRandomPokemons(response.data?.results);
        setTotalPokemons(response.data.count);
      }
    } catch (error) {
      setLoading(false);
    }
  }, [offsetRandomPokemons]);

  useEffect(() => {
    function initialFunction() {
      getPokemonsRandom();
    }

    initialFunction();
  }, [getPokemonsRandom]);

  const previousPokemons = useCallback(() => {
    if (offsetRandomPokemons > 4) {
      setOffsetRandomPokemons(offsetRandomPokemons - 5);

      getPokemonsRandom();
    }
  }, [offsetRandomPokemons, getPokemonsRandom]);

  const nextPokemons = useCallback(() => {
    if (offsetRandomPokemons < totalPokemons - 4) {
      setOffsetRandomPokemons(offsetRandomPokemons + 4);

      getPokemonsRandom();
    }
  }, [offsetRandomPokemons, getPokemonsRandom, totalPokemons]);

  return (
    <>
      <Header />
      <Container>
        <CardPokedex setLoading={setLoading} />
        <PokemonRandomContainer>
          <Circle onClick={previousPokemons}>
            <MdChevronLeft />
          </Circle>
          {listRandomPokemons.map((pokemon, index) => (
            <CardPokemon
              key={String(index)}
              namePokemon={capitalizeFirstLetter(pokemon?.name)}
              urlImage={getLinkSprite(pokemon?.url)}
            />
          ))}
          <Circle onClick={nextPokemons}>
            <MdChevronRight />
          </Circle>
        </PokemonRandomContainer>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
