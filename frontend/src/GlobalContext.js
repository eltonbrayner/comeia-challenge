import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { danger, success } from './components/Alerts';
import {
  APPOINTMENT_REGISTER,
  USER_LOGIN,
  CONSULT_APPOINTMENT,
  TOKEN_CHECK,
} from './utils/api';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [error, setError] = React.useState('');
  const [dataConsult, setDataConsult] = React.useState('');
  const [load, setLoad] = React.useState(false);
  const navigate = useNavigate();

  async function setAppointment(data) {
    try {
      setError('');
      setLoad(true);
      const { addr, body } = APPOINTMENT_REGISTER(data);
      const response = await axios.post(addr, body);
      if (response.data.status === 401)
        throw new Error('CPF digitado é invalido');

      if (response.data.status === 402)
        throw new Error('Algum campo obrigatório não foi preenchido.');

      if (response.data.status === 409)
        throw new Error('Já existe um agendamento para esse CPF.');

      if (response.data.status === 400)
        throw new Error('Ocorreu um erro ao tentar realizar o agendamento.');

      return success(`Agendamento realizado com sucesso.`);
    } catch (err) {
      return setError(err.message);
    } finally {
      return setLoad(false);
    }
  }

  async function userLogin(data) {
    try {
      setError('');
      setLoad(true);
      const { addr, body } = USER_LOGIN(data);
      const response = await axios.post(addr, body);
      if (response.data.status === 500)
        throw new Error('Usuário ou senha inválido');

      window.localStorage.setItem(
        '@login',
        JSON.stringify(response.data.token),
      );
      success(`Login realizado com sucesso.`);
      navigate('/Administrator');
    } catch (err) {
      return setError(err.message);
    } finally {
      return setLoad(false);
    }
  }

  async function consult(data) {
    try {
      setError('');
      setLoad(true);
      const { addr } = CONSULT_APPOINTMENT(data);
      const response = await axios.get(addr);
      if (response.data.status === 400)
        throw new Error('Não há agendamento para esse CPF');

      setDataConsult(new Array(response.data.consult));
    } catch (err) {
      return setError(err.message);
    } finally {
      return setLoad(false);
    }
  }

  async function validateToken() {
    try {
      setLoad(true);
      const token = window.localStorage.getItem('@login');
      const { addr, headers } = TOKEN_CHECK(JSON.parse(token));
      const response = await axios.get(addr, { headers });
      if (response.data.status === 500) throw new Error('Sessão expirada');
    } catch (err) {
      navigate('/');
      window.localStorage.clear();
      return danger(err.message);
    } finally {
      return setLoad(false);
    }
  }

  const pageNavigate = (destiny) => navigate(destiny);

  return (
    <GlobalContext.Provider
      value={{
        load,
        error,
        setAppointment,
        userLogin,
        pageNavigate,
        consult,
        dataConsult,
        validateToken,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
