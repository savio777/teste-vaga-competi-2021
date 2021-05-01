import React from "react";

import {
  Container,
  LogoCompeti,
  LogoPokemon,
  InputSearch,
  ButtonLogin,
} from "./styles";

import logoPokemonSrc from "../../assets/International_Pokémon_logo.png";
import logoCompetiSrc from "../../assets/logo-competi.png";

const Header: React.FC = () => (
  <Container>
    <LogoPokemon src={logoPokemonSrc} />
    <InputSearch placeholder="Pesquisar Pokémon" />
    <ButtonLogin>Login</ButtonLogin>
    <LogoCompeti src={logoCompetiSrc} />
  </Container>
);

export default Header;
