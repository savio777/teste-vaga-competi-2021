import React, { useCallback, useEffect, useState } from "react";

import Footer from "../../components/footer";
import Header from "../../components/header";
import CardPokedex from "../../components/CardPokedex";
import CardPokemon from "../../components/CardPokemon";

import api from "../../services/api";
import { capitalizeFirstLetter, getLinkSprite } from "../../utils/helpers";

import { Container, PokemonRandomContainer } from "./styles";

interface ItemPokemonTypes {
  name: string;
  url: string;
}

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [offsetRandomPokemons, setOffsetRandomPokemons] = useState(0);
  const [limitRandomPokemons, setLimitRandomPokemons] = useState(5);
  const [listRandomPokemons, setListRandomPokemons] = useState<
    ItemPokemonTypes[]
  >([]);

  const getPokemonsRandom = useCallback(async () => {
    setLoading(true);

    try {
      const response = await api.get("/pokemon/", {
        params: { offset: offsetRandomPokemons, limit: limitRandomPokemons },
      });

      if (response.status === 200) {
        setListRandomPokemons([...response.data?.results]);
      }
    } catch (error) {
      setLoading(false);
    }
  }, [offsetRandomPokemons, limitRandomPokemons]);

  useEffect(() => {
    function initialFunction() {
      getPokemonsRandom();
    }

    initialFunction();
  }, [getPokemonsRandom]);

  return (
    <>
      <Header />
      <Container>
        <CardPokedex setLoading={setLoading} />
        <PokemonRandomContainer>
          {listRandomPokemons.map((pokemon) => (
            <CardPokemon
              namePokemon={capitalizeFirstLetter(pokemon?.name)}
              urlImage={getLinkSprite(pokemon?.url)}
            />
          ))}
        </PokemonRandomContainer>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
