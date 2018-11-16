import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  /*
  ==========================================================================
    Document
  ==========================================================================

  1. Stretch <html> stretch to fill our screen height
  2. Make children of html (body) occupy at least 100% of the screen
  3. Viewport is scalable and occupies at least 320px (iPhone 5)
  */

  html {
    min-width: 320px;
    height: 0;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.primaryWhite};
  }

  /*
  ==========================================================================
    Body
  ==========================================================================

  1. Force scroll always to prevent scrollbars to appear/disappear based on the page contents
  2. Make sure that we occupy 100% of our parent and allow our child elements to do the same
  3. Needed for IE11 otherwise flex wouldn't grow vertically, see https://stackoverflow.com/a/42930574
  */

  body {
    overflow-x: hidden;
    overflow-y: scroll;
    margin: 0;
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    font-family: "Poppins", sans-serif;
    font-size: ${props => props.theme.browserContext};
    font-weight: 400;
    font-style: normal;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    overflow-wrap: break-word; /* Break long words by default */
  }

  /* ==========================================================================
    Anchors
  ========================================================================== */

  a,
  a:focus,
  a:visited,
  a:hover,
  a:active {
    outline: none !important;
    color: ${props => props.theme.primaryRed};
    text-decoration: none !important;
  }

  a[href^="tel"] {
    color: inherit;
  }

  /* ==========================================================================
    Headings
  ========================================================================== */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 0;
    font-style: normal;
    line-height: 1.2em;
  }

  input {
    border-radius: 0;
  }

  select::-ms-expand {
    display: none;
  }

  select:focus option {
    background-color: ${props => props.theme.primaryGray};
    color: ${props => props.theme.primaryWhite};
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  input:not([value=""]) {
    border-color: ${props => props.theme.primaryWhite};
  }

  input:hover {
    border-color: ${props => props.theme.primaryWhite};
  }

  @keyframes autofill {
    to {
      background: transparent;
      color: ${props => props.theme.primaryGray};
    }
  }

  input:-webkit-autofill {
    animation-name: autofill;
    animation-fill-mode: both;
    -webkit-text-fill-color: ${props => props.theme.primaryWhite};
  }

  ::placeholder {
    /* Most modern browsers support this now. */
    color: ${props => props.theme.secondaryGray};
  }

  /* ==========================================================================
    Images
  ========================================================================== */

  svg {
    cursor: pointer;
  }
`;
