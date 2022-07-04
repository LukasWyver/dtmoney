import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 2.4rem;
    margin-bottom: 3.2rem;
  }
  input {
    width: 100%;
    padding: 0 2.4rem;
    height: 6.4rem;
    border-radius: 5px;

    border: 1px solid #d7d7d7;
    background-color: #e7e9ee;

    font-weight: 400;
    font-size: 1.6rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1.6rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 2.4rem;
    height: 6.4rem;

    background-color: var(--green);
    color: #fff;

    border: 0;
    border-radius: 5px;

    font-size: 1.6rem;
    font-weight: 600;
    margin-top: 2.4rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
export const TransactionTypeContainer = styled.div`
  margin: 1.6rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem;

  button {
    height: 6.4rem;
    border: 1px solid #d7d7d7;
    border-radius: 5px;

    background: transparent;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.2s;

    &:hover {
      border-color: ${darken(0.1, "#d7d7d7")};
    }

    span {
      display: inline-block;
      margin-left: 1.6rem;
      font-size: 1.6rem;
      color: var(--text-title);
    }
  }
`;
