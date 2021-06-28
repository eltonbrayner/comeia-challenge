import styled from 'styled-components'

export const Content = styled.main`
  margin-bottom: 2rem;
`

export const Form = styled.div`
  margin: 0 auto;
  max-width: 80rem;
  padding: 2rem 4rem 4.2rem;
  border-radius: 0.5rem;
  background: var(--backgroundForms);
`

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
`