import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 3.2rem 16rem 13.2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    color: #fff;
    font-weight: 600;
    line-height: 24px;

    background-color: var(--blue-light);

    padding: 1.2rem 3.2rem;
    border-radius: 5px;
    border: 0;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
