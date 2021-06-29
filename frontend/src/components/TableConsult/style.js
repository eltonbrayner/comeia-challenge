import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1rem;

  table {
    width: 100%;
    border-spacing: 0 0.8rem;

    tr:hover {
      filter: brightness(0.9);
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
    }
  }
`;
