import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  color: var(--titleColor);
  @media (max-width: 640px) {
    font-size: 2rem;
  }
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

  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`;
