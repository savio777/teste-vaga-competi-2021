import styled from "styled-components";

import colors from "../../utils/colors";

export const Container = styled.div`
  display: flex;
  flex: 1;
  max-height: 922px;
  width: 65%;
  background: ${colors.backgroundCard};
`;

export const ContainerInputFilter = styled.div`
  max-height: 109px;
  width: 100%;
  padding: 19px 0 30px 52px;
  border-bottom: 1px solid ${colors.border};

  p {
    font-size: 12px;
    color: ${colors.gray};
  }

  select {
    max-width: 204px;
    width: 100%;
    max-height: 45px;
    height: 100%;
    //padding: 11px 18 5px 6px 20px;
    padding-top: 11px;
    padding-left: 20px;
    padding-bottom: 5px;

    border: 1px solid ${colors.border};
    border-radius: 3px;

    color: ${colors.gray};
    font-size: 20px;
  }
`;

export const ContainerPokemons = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 81px 107px 70px 107px;
`;
