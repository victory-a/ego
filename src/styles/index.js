import { createGlobalStyle } from "styled-components";
import colors from "styles/colors";

const size = {
  mobile: "425px",
  tablet: "768px",
  laptop: "1025px",
  desktop: "1441px"
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`
};

const GlobalStyles = createGlobalStyle`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }

  html {
    font-size: 50%;

    @media ${device.mobile} {
      font-size: 62.5%;
    }
  }
  
 body {
    width: 100%;
    height: 100%;
    font-size: 14px;
    min-height: 100%;
    font-family: 'Raleway', sans-serif;
    -webkit-font-smoothing: antialiased;
    outline: none;
    color: ${colors.fauxBlack};
    background-color: ${colors.cream};
  }

  button,
  input {
    padding: 2rem !important;
  }

  button {
    font-size: 1.6rem !important;

/* override chakra-ui default menu-button color hover */
    &[role="menuitem"] {
      :focus {
        background-color: ${colors.primaryHoverLight} !important;
      }
    }
  }

  input {
    font-size: 1.4rem !important;
    background-color: ${colors.froastedWhite} !important;
    color: ${colors.primary} !important;
  }

  label {
    font-size: 1.4rem !important;
  }

  a {
    text-decoration: none !important;
    transform: color .5s;
  }

  ul {
    list-style-type: none;
  }

  input {
    :focus {
      border: 1px solid ${colors.primary} !important;
      outline: none;
      box-shadow: 0 0 0 .8px ${colors.primary} !important;
    }
  }
`;

export default GlobalStyles;
