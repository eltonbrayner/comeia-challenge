import React from 'react';

import { GlobalContext } from '../../GlobalContext';

import { TableAdm } from '../../components/TableAdm';

import * as S from './style';
import * as G from '../../styles/GlobalComponents';

export function Administrator() {
  const [document, setDocument] = React.useState('');
  const { load, pageNavigate, consult, error, dataConsult, validateToken } =
    React.useContext(GlobalContext);

  function handleSubmit(e) {
    e.preventDefault();
    consult(document);
  }

  function handleLogout() {
    const logout = window.confirm('Deseja sair da area de administração?');
    if (logout) {
      window.localStorage.clear();
      pageNavigate('/');
    }
  }

  validateToken();

  return (
    <div className="animeShow">
      <S.Title>Administração</S.Title>
      <S.Box>
        {error && <G.Error>{error}</G.Error>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="filter">Filtro</label>
          <input
            id="filter"
            name="filter"
            type="text"
            value={document}
            onChange={({ target }) => setDocument(target.value)}
            placeholder="Nome, CPF ou Profissão"
          />
        </form>
      </S.Box>
      {dataConsult && <TableAdm data={dataConsult} />}
      <S.Button onClick={handleLogout} disabled={load} type="button">
        Sair
      </S.Button>
    </div>
  );
}
