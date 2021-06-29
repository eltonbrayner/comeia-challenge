import { useNavigate } from 'react-router-dom';
import * as S from './style';

export function Menu() {
  const navigate = useNavigate();
  return (
    <div className="animeLeft">
      <S.Title>Menu de Acesso</S.Title>
      <S.MenuBtn onClick={() => navigate('Appointment')}>
        Realizar Agendamento
      </S.MenuBtn>
      <S.MenuBtn onClick={() => navigate('Consult')}>
        Consultar Agendamento
      </S.MenuBtn>
      <S.MenuBtn onClick={() => navigate('Login')}>Administração</S.MenuBtn>
    </div>
  );
}
