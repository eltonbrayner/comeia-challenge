import { Route, Routes } from 'react-router-dom';

import { Menu } from './Menu';
import { FormAppointment } from './FormAppointment';
import { ConsultAppointment } from './ConsultAppointment';
import { Login } from './Login';
import { Administrator } from './Administrator';

import { Heading } from '../components/Heading';

import * as S from './style';

export function MainContent() {
  return (
    <>
      <Heading />
      <S.Content>
        <S.Box className="animeLeft">
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="Appointment" element={<FormAppointment />} />
            <Route path="Consult" element={<ConsultAppointment />} />
            <Route path="Login" element={<Login />} />
            <Route path="Administrator" element={<Administrator />} />
          </Routes>
        </S.Box>
      </S.Content>
    </>
  );
}
