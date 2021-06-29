import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --backgroundBody: #F8F4F5;
    --backgroundForms: #FFFFFF;

    --inputBackground: #e7e9ee;
    --inputBorder: #d7d7d7;

    --titleColor: #3e3e3e;

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
    height: 4rem;
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
    width: 100%;
    padding: 0.8rem;
    border-radius: 0.4rem;
    background: var(--inputBackground);
    transition: 0.2s;
    margin-bottom: 1rem;
    resize: none
  }

  input:focus,
  input:hover
  select:hover,
  select:focus
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

  .animeLeft {
  opacity: 0;
  transform: translateX(-20px);
  animation: animePage 1s forwards; 
  }
  
  .animeShow {
    opacity: 0;
    animation: animePage 1s forwards; 
  }

  .animeDown {
    opacity: 0;
    transform: translateY(-20px);
    animation: animePage 0.5s forwards; 
  }

  @keyframes animePage {
    to {
      opacity: 1;
      transform: initial;
    }
  }
  @media(max-width: 51rem){
    input, textarea {
      min-width: 16.5rem;
    }
  }
`;
