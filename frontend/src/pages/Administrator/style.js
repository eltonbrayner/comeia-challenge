import styled from 'styled-components';

export const Content = styled.div`
  color: var(--titleColor);
  font-weight: bold;
`;

export const Box = styled.div`
  margin: 4rem auto;
  max-width: 30rem;

  label {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 1rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  div {
    width: 100%;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: var(--titleColor);
`;

export const Button = styled.button`
  padding: 1rem 4rem;
  border-radius: 0.25rem;
  background: var(--red);
  color: var(--backgroundForms);
  font-weight: bold;
  margin-top: 1rem;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(1.5);
  }
  & + & {
    margin-left: 1rem;
  }
`;
