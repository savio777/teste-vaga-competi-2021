import { createGlobalStyle } from "styled-components";

import colors from "../utils/colors";

export default createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
      border: 0;
    }
    body{
      background: ${colors.secundary};
      color: #FFF;
      -webkit-font-smoothing: antialiased;
    }
    body, input, button, select{
        font: 16px 'Poppins', sans-serif;
    }
    h1, h2, h3, h4, h5, h6, strong{
      font-weight: 500;
    }
    button{
      cursor: pointer;
    }
`;
