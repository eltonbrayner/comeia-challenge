import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { danger, success } from './components/Alerts';
import {
  APPOINTMENT_REGISTER,
  USER_LOGIN,
  APPOINTMENT_CONSULT,
  TOKEN_CHECK,
  APPOINTMENTS_LOAD,
  APPOINTMENT_DELETE,
} from './utils/api';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [error, setError] = React.useState('');
  const [dataConsult, setDataConsult] = React.useState('');
  const [dataAppointments, setDataAppointments] = React.useState([]);

  const [load, setLoad] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
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

  async function getAppointment(numPage) {
    try {
      setError('');
      setLoad(true);
      const token = window.localStorage.getItem('@login');
      !token && navigate('/');
      validateToken();
      const { addr, headers } = APPOINTMENTS_LOAD(JSON.parse(token), numPage);
      const response = await axios.get(addr, { headers });
      if (response.data.status !== 200) throw new Error(response.data.message);
      setDataAppointments(response.data.appointments);
    } catch (err) {
      return setError(err.message);
    } finally {
      return setLoad(false);
    }
  }

  async function deleteAppointment(cpf) {
    try {
      setError('');
      setLoad(true);
      const token = window.localStorage.getItem('@login');
      if (!token) {
        danger('Sessão expirada');
        navigate('/');
      }
      const { addr, headers } = APPOINTMENT_DELETE({ cpf, token });
      const response = await axios.delete(addr, { headers });
      if (response.data.status === 400)
        throw new Error('Não há CPF cadastrado com essa númeração');

      if (response.data.status === 500)
        throw new Error('Ocorreu algum problema ao tentar exlcuir');

      success('Agendamento excluido com sucesso');
      const newData = dataAppointments.filter((el) => el.cpf !== cpf);
      setDataAppointments(newData);
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
      const { addr } = APPOINTMENT_CONSULT(data);
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
      !token && navigate('/');
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

  const pageNavigate = (destiny) => {
    setError('');
    navigate(destiny);
  };

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
        getAppointment,
        setDataAppointments,
        dataAppointments,
        deleteAppointment,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
