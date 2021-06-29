import React from 'react';

import { GlobalContext } from '../../GlobalContext';
import { cpfMask } from '../../utils/validators';

import { TableConsult } from '../../components/TableConsult';

import * as S from './style';
import * as G from '../../styles/GlobalComponents';

export function ConsultAppointment() {
  const [document, setDocument] = React.useState('');
  const { load, pageNavigate, consult, error, dataConsult } =
    React.useContext(GlobalContext);

  function handleSubmit(e) {
    e.preventDefault();
    consult(document);
  }

  return (
    <div className="animeShow">
      <S.Title>Consulta Agendamento</S.Title>
      <S.Box>
        {error && <G.Error>{error}</G.Error>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="cpf">CPF</label>
          <input
            id="cpf"
            name="cpf"
            type="text"
            value={document}
            onChange={({ target }) => setDocument(cpfMask(target.value))}
            placeholder="Ex: 000.000.000-00"
          />
          <S.Wrapper>
            <G.Button
              onClick={() => pageNavigate('/')}
              disabled={load}
              secundary
              type="button"
            >
              Voltar
            </G.Button>

            <G.Button disabled={load} primary type="submit">
              Consultar
            </G.Button>
          </S.Wrapper>
        </form>
      </S.Box>
      {dataConsult && <TableConsult data={dataConsult} />}
    </div>
  );
}
