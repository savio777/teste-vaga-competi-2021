import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { capitalizeFirstLetter } from "../../utils/helpers";

import { Container, ContainerInputFilter } from "./styles";

interface ListTypesPokemons {
  name: string;
  url: string;
}

const CardPokedex: React.FC = () => {
  const [listTypesPokemons, setListTypesPokemons] = useState<
    ListTypesPokemons[]
  >([]);

  useEffect(() => {
    async function initialFunction() {
      const response = await api.get("/type");

      if (response.status === 200) {
        setListTypesPokemons([...response.data?.results]);
      }
    }

    initialFunction();
  }, []);

  return (
    <Container>
      <ContainerInputFilter>
        <p>Filter</p>
        <select>
          {listTypesPokemons.map((listTypes) => (
            <option value={listTypes.name}>
              {capitalizeFirstLetter(listTypes.name)}
            </option>
          ))}
        </select>
      </ContainerInputFilter>
    </Container>
  );
};
export default CardPokedex;
