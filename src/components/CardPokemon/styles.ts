import styled from "styled-components";

import colors from "../../utils/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.backgroundCardPokemonSprite};
  max-width: 180px;
  max-height: 180px;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 12px;
  border: 2px solid ${colors.borderButton};
  border-radius: 7px;

  &:hover {
    background: rgba(0, 0, 0, 0.24);
  }

  img {
    transform: translate(0, 30px);
  }

  p {
    border: 2px solid ${colors.borderButton};
    border-radius: 15px;
    transform: translate(0, 30px);
    background: ${colors.backgroundButton};
    text-align: center;
    padding: 17px 23px 15px 19px;
    width: 80%;
    font-size: 14px;
  }

  margin: 0 25px 70px 25px;
`;
