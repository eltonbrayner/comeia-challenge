import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1rem;

  table {
    width: 100%;
    border-spacing: 0 0.8rem;

    tr {
      transition: filter 0.5s;
      &:hover {
        filter: brightness(0.9);
      }
    }

    th {
      color: #969cb3;
      font-weight: bold;
      padding: 1rem 2rem;
      text-align: center;
      line-height: 1.5rem;
    }
    td {
      text-align: center;
      padding: 1.4rem 2rem;
      border: 0;
      background: #e7e9ee;
      color: #969cb3;
      &:first-child {
        border-radius: 1rem 0 0 1rem;
        color: #363f5f;
      }
      &:last-child {
        border-radius: 0 1rem 1rem 0;
      }

      button {
        cursor: pointer;

        background: inherit;
        color: inherit;

        transition: color 0.5s;

        &:hover {
          color: var(--red);
        }
      }
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const PagButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;

  color: var(--backgroundForms);
  background: var(--green);
  font-weight: bold;
  & + button {
    margin-left: 1rem;
  }
`;
