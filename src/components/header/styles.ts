import styled from "styled-components";

import color from "../../utils/colors";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  background: ${color.principal};
  max-height: 86px;

  padding: 15px 24px 22px 30px;
  align-items: center;
  justify-content: space-between;
`;

export const InputSearch = styled.input`
  background: #ffff;
  height: 55px;
  width: 1298px;
  border-radius: 4px;
  padding-left: 22px;

  &::placeholder {
    color: ${color.gray};
    font-size: 20px;
  }
`;

export const ButtonLogin = styled.button`
  background: ${color.backgroundButton};
  max-height: 113px;
  border: 2px solid #000;
  border-radius: 7px;
  color: #fff;
  padding: 7px 31px 7px 31px;
  align-items: center;
  justify-content: center;
`;

export const LogoPokemon = styled.img`
  width: 151px;
  height: 55px;
`;

export const LogoCompeti = styled.img`
  width: 151px;
  height: 37px;
`;
