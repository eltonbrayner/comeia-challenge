import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  color: var(--titleColor);
`;

export const MenuBtn = styled.button`
  display: block;
  margin: 2rem auto;

  padding: 1rem;
  border-radius: 0.25rem;

  font-weight: bold;
  font-size: 2rem;

  background: var(--green);
  color: white;

  width: 100%;
  max-width: 40rem;

  &:hover {
    filter: brightness(1.5);
  }
`;
