import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  font-size:  62.5%; /* 1 rem = 10px */

  --background: #f0f2f5;
  --red: #E52e54;
  --blue: #5429CC;
  --green: #33CC95;

  --blue-light: #6933FF;

  --text-title: #363f5f;
  --text-body: #969cb3;

  --shape: #FFFFFF
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
    @media(max-width: 1080px) {
        font-size: 1.5rem; // 93.75% ou 15px
    }

    @media(max-width: 720px) {
        font-size: 1.4rem; // 87.50% ou 14px
    }
}

body{
  background-color: var(--background);
  -webkit-font-smoothing: antialiased;

  color: var(--text-body);
}

body, input, textarea, button {
  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}


button {
  cursor: pointer;
}

[disabled]{
  opacity: 0.6;
  cursor: not-allowed;
}


.react-modal-overlay{
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}
.react-modal-content{
  width: 100%;
  max-width: 57.6rem;

  background-color:var(--background);
  padding: 4.8rem;
  position: relative;
  border-radius: 5px;
}
.react-modal-close{
  position: absolute;
  right: 2.4rem;
  top: 2.4rem;
  border: 0;
  background: transparent;
}
`;
