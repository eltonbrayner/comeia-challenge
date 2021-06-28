import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --backgroundBody: #F8F4F5;
    --backgroundForms: #FFFFFF;

    --inputBackground: #e7e9ee;
    --inputBorder: #d7d7d7;

    --red: #D9534F;
    --green: #1B7037;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body,
  input,
  textarea,
  select,
  button {
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
  }

  body {
    background-color: var(--backgroundBody);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
    border: none;
  }

  input, textarea, select {
    border: 1px solid var(--inputBorder);
    display: block;
    min-width: 25rem;
    width: 100%;
    padding: 0.8rem;
    border-radius: 0.4rem;
    background: var(--inputBackground);
    transition: 0.2s;
    margin-bottom: 1rem;
    resize: none
  }

  textarea {
    height: 10rem;
  }

  input:focus,
  input:hover,
  .editor:focus,
  .editor:hover
  {
    outline: none; 
    border-color: var(--green);
    background: 'white';
    box-shadow: 0 0 0 2px var(--green);
  }

  label {
    display: block;
    font-size: 1.5rem;
    line-height: 1;
    padding-bottom: 0.5rem;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed
  }
`
