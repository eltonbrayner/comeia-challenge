import styled from 'styled-components';

export const Button = styled.button`
  padding: 1rem 4rem;
  border-radius: 0.25rem;
  background: ${(props) => (props.primary ? 'var(--green)' : 'none')};
  color: ${(props) => (props.primary ? 'white' : '#3E3E3E')};
  font-weight: bold;
  margin-right: ${(props) => props.secundary && '1rem'};
  margin-top: 1rem;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(1.5);
  }
  & + & {
    margin-left: 1rem;
  }
`;

export const Error = styled.span`
  color: var(--red);
  font-weight: bold;
  display: block;
  padding-bottom: 1rem;
  text-align: center;
`;
