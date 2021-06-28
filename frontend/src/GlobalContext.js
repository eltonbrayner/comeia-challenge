import React from 'react';
import { useNavigate } from 'react-router-dom';
import { success, danger } from './components/Alerts';


export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [error, setError] = React.useState('');
  const [register, setRegister] = React.useState('');
  const [load, setLoad] = React.useState(false);
  const navigate = useNavigate();

  // async function userLogin(inputValue) {
  //   try {
  //     setError('');
  //     setLoad(true);
  //     if (inputValue.email.length <= 0 || !validateEmail(inputValue.email)) {
  //       throw new Error(
  //         'O campo e-mail deve ser preenchido com um e-mail valido.',
  //       );
  //     }
  //     if (inputValue.password.length <= 0) {
  //       throw new Error('O campo senha deve ser preenchido.');
  //     }

  //     const result = await getUser(inputValue);
  //     if (result.error) {
  //       throw new Error('O usuário ou senha está incorreto');
  //     } else {
  //       await localStorage.setItem('login', JSON.stringify(inputValue.email))
  //       navigate('/user');
  //       success(`Seja bem vindo ${capitalize(result.data.nome)}`);
  //     }
  //   } catch (err) {
  //     return setError(err.message);
  //   } finally {
  //     return setLoad(false);
  //   }
  // }


  return (
    <GlobalContext.Provider
      value={{
        load
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};