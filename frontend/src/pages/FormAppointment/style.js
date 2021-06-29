import styled from 'styled-components';

export const Error = styled.span`
  color: var(--red);
  font-weight: 700;
  display: block;
  margin: 0rem 0.5rem 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  div {
    width: 100%;
  }
`;

export const Content = styled.div`
  color: var(--titleColor);
  h1 {
    text-align: center;
    margin: 1rem 0;
    color: #3e3e3e;
  }
`;
