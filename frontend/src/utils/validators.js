export function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const messageTranslate = {
  emailInvalid: 'Digite um e-mail válido.',
  otherRequired: 'Este campo é obrigatório.',
  minPassword: (num) =>
    `A senha é muito curta - deve ter no mínimo ${num} caracteres.`,
  minChar: (num) => `No minimo são necessários ${num} caracteres.`,
  maxChar: (num) => `Permitido, no máximo, ${num} caracteres`,
};

export const capitalize = (s) =>
  s.toLowerCase()[0].toUpperCase() + s.toLowerCase().slice(1).split(' ')[0];