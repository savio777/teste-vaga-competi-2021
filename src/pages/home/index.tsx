import React from "react";

import Footer from "../../components/footer";
import Header from "../../components/header";
import CardPokedex from "../../components/CardPokedex";

import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <CardPokedex />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
