import React from "react";

import { Container } from "./styles";

interface CardPokemonProps {
  urlImage: string;
  namePokemon: string;
}

const CardPokemon: React.FC<CardPokemonProps> = ({ namePokemon, urlImage }) => (
  <Container>
    <img src={urlImage} alt={namePokemon} style={{ width: 100, height: 100 }} />
    <p>{namePokemon}</p>
  </Container>
);

export default CardPokemon;
