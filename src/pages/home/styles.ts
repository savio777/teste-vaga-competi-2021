import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 86.2vh;
  flex-direction: column;
  overflow-y: auto;

  padding: 0 90px 72px 90px;
  align-items: center;
`;

export const PokemonRandomContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 50px;
  width: 100%;
  max-height: 250px;
`;
