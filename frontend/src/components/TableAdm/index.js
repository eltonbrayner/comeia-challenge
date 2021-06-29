import React from 'react';
import axios from 'axios';
import { GlobalContext } from '../../GlobalContext';

import { Trash2Outline } from '@styled-icons/evaicons-outline/Trash2Outline';
import * as S from './style';
import { APPOINTMENTS_LOAD } from '../../utils/api';

export function TableAdm({ data, setData }) {
  const { deleteAppointment, load, validateToken, searchTerm } =
    React.useContext(GlobalContext);
  const [total, setTotal] = React.useState(0);
  const [pages, setPages] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(0);

  function handleDelete(cpf) {
    const response = window.confirm('Deseja deletar esse agendamento?');
    response && deleteAppointment(cpf);
  }

  React.useEffect(() => {
    async function fetchData() {
      await validateToken();
      const token = window.localStorage.getItem('@login');
      const { addr, headers } = APPOINTMENTS_LOAD(
        JSON.parse(token),
        currentPage,
        searchTerm,
      );
      const response = await axios.get(addr, { headers });

      const { size, limit, appointments: dataAppointments1 } = response.data;

      setTotal(size);
      const totalPages = Math.ceil(size / limit);
      const arrayPages = [];
      for (let i = 1; i <= totalPages; i++) {
        arrayPages.push(i);
      }

      setPages(arrayPages);
      setData(dataAppointments1);
    }

    fetchData();
  }, [currentPage]);

  return (
    <S.Container>
      <S.Pagination>
        {currentPage > 0 && (
          <S.PagButton
            onClick={() => currentPage > 0 && setCurrentPage(currentPage - 1)}
          >
            {'<'}
          </S.PagButton>
        )}
        {pages &&
          pages.map((el) => (
            <S.PagButton
              disabled={el - 1 === currentPage ? true : load}
              onClick={() => setCurrentPage(el - 1)}
              key={el}
            >
              {el}
            </S.PagButton>
          ))}
        {currentPage < pages.length - 1 && (
          <S.PagButton
            onClick={() =>
              currentPage < pages.length - 1 && setCurrentPage(currentPage + 1)
            }
          >
            {'>'}
          </S.PagButton>
        )}
      </S.Pagination>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Dt. Nasc.</th>
            <th>CPF</th>
            <th>Profissão</th>
            <th>Comorbidade</th>
            <th>Dt. da Vacina</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((el) => {
              const time = el.dataSchedule.split('T')[1];
              return (
                <tr key={el.id}>
                  <td>{el.name}</td>
                  <td>{el.birth.split('-').reverse().join('/')}</td>
                  <td>{el.cpf}</td>
                  <td>{el.profession}</td>
                  <td>{el.comorbidity}</td>
                  <td>
                    {new Date(el.dataSchedule).toLocaleDateString('pt-BR')} as{' '}
                    {time}h
                  </td>
                  <td>
                    <button disabled={load}>
                      <Trash2Outline
                        onClick={() => handleDelete(el.cpf)}
                        size={24}
                      />
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <p>Total de registros {total}</p>
    </S.Container>
  );
}
