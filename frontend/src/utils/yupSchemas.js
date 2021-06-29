import * as Yup from 'yup';
import { messageTranslate } from './validators';

export const YupSchemas = {
  name: Yup.string()
    .max(100, messageTranslate.maxChar(100))
    .required(messageTranslate.otherRequired),
  cpf: Yup.string()
    .min(11, messageTranslate.minChar(11))
    .required(messageTranslate.otherRequired),
  birth: Yup.date()
    .label('birth')
    .min(messageTranslate.minDateBirth, messageTranslate.minDateBirthStr)
    .max(messageTranslate.maxDateBirth, messageTranslate.maxDateBirthStr)
    .required(messageTranslate.otherRequired)
    .nullable()
    .typeError('Data inválida'),
  comorbidityBoolean: Yup.boolean().required(messageTranslate.otherRequired),
  profession: Yup.string().required(messageTranslate.otherRequired),
  date: Yup.date()
    .label('date')
    .min(messageTranslate.minDate, messageTranslate.minDateStr)
    .max(messageTranslate.maxDate, messageTranslate.maxDateStr)
    .required(messageTranslate.otherRequired)
    .nullable()
    .typeError('Data inválida'),
};
