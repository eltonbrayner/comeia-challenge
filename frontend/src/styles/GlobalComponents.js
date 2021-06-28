import styled from 'styled-components'

export const Button = styled.button`
  padding: 1rem 4rem;
  border-radius: 0.25rem;
  background: ${(props) => (props.primary ? 'var(--green)' : 'none')};
  color: ${(props) => (props.primary ? 'white' : 'black')};
  font-weight: bold;
  float: right;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(1.5);
  }
  & + & {
    margin-left: 1rem;
  }
`;