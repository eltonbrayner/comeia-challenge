import React from 'react';
import { GlobalContext } from '../../GlobalContext';
import * as S from './style';

export function Menu() {
  const { pageNavigate } = React.useContext(GlobalContext);
  return (
    <div className="animeLeft">
      <S.Title>Menu de Acesso</S.Title>
      <S.MenuBtn onClick={() => pageNavigate('Appointment')}>
        Realizar Agendamento
      </S.MenuBtn>
      <S.MenuBtn onClick={() => pageNavigate('Consult')}>
        Consultar Agendamento
      </S.MenuBtn>
      <S.MenuBtn onClick={() => pageNavigate('Login')}>Administração</S.MenuBtn>
    </div>
  );
}
