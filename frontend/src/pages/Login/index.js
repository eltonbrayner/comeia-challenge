import React from 'react';
import { GlobalContext } from '../../GlobalContext';

import * as S from './style';
import * as G from '../../styles/GlobalComponents';

const LOGIN_INIT = { username: '', password: '' };

export function Login() {
  const [loginData, setLoginData] = React.useState(LOGIN_INIT);

  const { error, load, userLogin, pageNavigate } =
    React.useContext(GlobalContext);

  const handleChange = (e) =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    userLogin(loginData);
  };

  return (
    <S.Content className="animeShow">
      <S.Title>Administração</S.Title>
      <S.Box>
        {error && <G.Error>{error}</G.Error>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Usuário</label>
          <input
            required
            id="username"
            name="username"
            type="text"
            placeholder="Usuário"
            value={loginData.login}
            onChange={handleChange}
          />
          <label htmlFor="password">Senha</label>
          <input
            required
            id="password"
            name="password"
            type="password"
            placeholder="Senha"
            value={loginData.password}
            onChange={handleChange}
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
              Login
            </G.Button>
          </S.Wrapper>
        </form>
      </S.Box>
    </S.Content>
  );
}
