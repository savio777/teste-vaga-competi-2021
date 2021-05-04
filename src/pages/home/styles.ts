import styled from "styled-components";

import colors from "../../utils/colors";

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

export const Circle = styled.button`
  background: ${colors.principal};
  border-radius: 50%;
  color: #fff;
  padding: 5px;
  max-width: 60;
  display: flex;
  margin-top: -70px;
`;
