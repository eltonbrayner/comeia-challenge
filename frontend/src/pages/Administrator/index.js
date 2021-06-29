import React from 'react';

import { GlobalContext } from '../../GlobalContext';

import { TableAdm } from '../../components/TableAdm';

import { SearchInput } from '../../components/Search';

import * as S from './style';
import * as G from '../../styles/GlobalComponents';
import { APPOINTMENTS_LOAD } from '../../utils/api';
import axios from 'axios';

export function Administrator() {
  const {
    load,
    pageNavigate,
    error,
    setDataAppointments,
    dataAppointments,
    setSearchTerm,
  } = React.useContext(GlobalContext);
  const [search, setSearch] = React.useState('');

  function handleLogout() {
    const logout = window.confirm('Deseja sair da area de administração?');
    if (logout) {
      window.localStorage.clear();
      pageNavigate('/');
    }
  }

  React.useEffect(() => {
    async function searchTerm() {
      if (search) {
        const token = window.localStorage.getItem('@login');
        const { addr, headers } = APPOINTMENTS_LOAD(
          JSON.parse(token),
          0,
          search,
        );
        const response = await axios.get(addr, { headers });
        setDataAppointments(response.data.appointments);
        setSearchTerm(search);
      }
    }

    searchTerm();
  }, [search, setDataAppointments]);

  return (
    <div className="animeShow">
      <S.Title>Administração</S.Title>
      <S.Box>
        {error && <G.Error>{error}</G.Error>}
        <form>
          <label htmlFor="search">Filtro</label>
          <SearchInput value={search} onChange={(el) => setSearch(el)} />
        </form>
      </S.Box>
      <TableAdm
        data={dataAppointments}
        setData={(e) => setDataAppointments(e)}
      />
      <S.Button onClick={handleLogout} disabled={load} type="button">
        Sair
      </S.Button>
    </div>
  );
}
