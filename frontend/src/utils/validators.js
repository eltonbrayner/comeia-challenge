export const messageTranslate = {
  emailInvalid: 'Digite um e-mail válido.',
  otherRequired: 'Este campo é obrigatório.',
  minPassword: (num) =>
    `A senha é muito curta - deve ter no mínimo ${num} caracteres.`,
  minChar: (num) => `No minimo são necessários ${num} caracteres.`,
  maxChar: (num) => `Permitido, no máximo, ${num} caracteres`,
  minDate: new Date(Date.now()),
  minDateStr: 'Não há como agendar no passado.',
  maxDate: new Date(Date.now() + 86400000 * 10),
  maxDateStr: 'Não há previsão de vácinas nessa data',
  minDateBirth: new Date(Date.now() - 86400000 * 365 * 120),
  minDateBirthStr: 'Não há como você ter mais de 120 anos',
  maxDateBirth: new Date(Date.now() - 86400000),
  maxDateBirthStr: 'Você precisa ter nascido para tomar a vacina',
};

export const capitalize = (s) =>
  s.toLowerCase()[0].toUpperCase() + s.toLowerCase().slice(1).split(' ')[0];

export const cpfMask = (value) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};

export const validateCPF = (cpf) => {
  var add,
    rev,
    i = 0;
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf === '') return false;
  if (
    cpf.length !== 11 ||
    cpf === '00000000000' ||
    cpf === '11111111111' ||
    cpf === '22222222222' ||
    cpf === '33333333333' ||
    cpf === '44444444444' ||
    cpf === '55555555555' ||
    cpf === '66666666666' ||
    cpf === '77777777777' ||
    cpf === '88888888888' ||
    cpf === '99999999999'
  )
    return false;
  add = 0;
  for (i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
  rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cpf.charAt(9))) return false;
  add = 0;
  for (i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
  rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cpf.charAt(10))) return false;
  return true;
};
