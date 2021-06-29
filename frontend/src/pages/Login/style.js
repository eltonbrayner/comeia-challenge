import styled from 'styled-components';

export const Content = styled.div`
  color: var(--titleColor);
  font-weight: bold;
`;

export const Box = styled.div`
  margin: 4rem auto;
  max-width: 35rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 640px) {
    flex-direction: column;
  }

  div {
    width: 100%;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: var(--titleColor);
`;
