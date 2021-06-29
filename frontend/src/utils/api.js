export const API_URL = 'http://localhost:3333';

export function APPOINTMENT_REGISTER(body) {
  const addr = API_URL + '/appointmnents/create';
  return {
    addr,
    body,
  };
}

export function USER_LOGIN(body) {
  const addr = API_URL + '/administrator/login';
  return {
    addr,
    body,
  };
}

export function TOKEN_CHECK(token) {
  const addr = API_URL + '/administrator/token';
  return {
    addr,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'x-access-token': token,
    },
  };
}

export function APPOINTMENT_CONSULT(body) {
  const addr = API_URL + `/appointments/find/${body}`;
  return {
    addr,
  };
}

export function APPOINTMENT_DELETE(body) {
  const addr = API_URL + `/appointments/delete/${body.cpf}`;
  return {
    addr,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'x-access-token': JSON.parse(body.token),
    },
  };
}

export function APPOINTMENTS_LOAD(token, numPage = 0, search = '') {
  const addr =
    API_URL +
    `/appointments?page=${numPage}${search.length > 0 && `&search=${search}`}`;
  return {
    addr,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'x-access-token': token,
    },
  };
}
