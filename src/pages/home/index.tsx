import React from "react";

import Footer from "../../components/footer";
import Header from "../../components/header";

import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>teste</h1>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
