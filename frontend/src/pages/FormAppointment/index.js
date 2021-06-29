import React from 'react';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { cpfMask, validateCPF } from '../../utils/validators';

import * as S from './style';
import * as G from '../../styles/GlobalComponents';

import { danger } from '../../components/Alerts';
import { YupSchemas } from '../../utils/yupSchemas';
import { GlobalContext } from '../../GlobalContext';

const schema = Yup.object().shape({
  name: YupSchemas.name,
  cpf: YupSchemas.cpf,
  birth: YupSchemas.birth,
  comorbidityBoolean: YupSchemas.comorbidityBoolean,
  profession: YupSchemas.profession,
  dataSchedule: YupSchemas.date,
});

export function FormAppointment() {
  const { error, load, setAppointment, pageNavigate } =
    React.useContext(GlobalContext);
  const [comorbidity, setComorbidity] = React.useState(false);
  const handleSubmitForm = (e) =>
    validateCPF(e.cpf) ? setAppointment(e) : danger('CPF digitado é invalido');

  return (
    <S.Content className="animeShow">
      <h1>CADASTRO PARA VACINAÇÃO COVID-19</h1>
      {error && <G.Error>{error}</G.Error>}
      <Formik
        validationSchema={schema}
        initialValues={{
          name: '',
          cpf: '',
          birth: '',
          comorbidityBoolean: '',
          comorbidity: '',
          profession: '',
          dataSchedule: '',
        }}
        enableReinitialize
        onSubmit={(e) => handleSubmitForm(e)}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form>
            <label htmlFor="name">Nome</label>
            <Field id="name" name="name" type="text" />
            {errors.name && touched.name && <S.Error>{errors.name}</S.Error>}
            <S.Wrapper>
              <div>
                <label htmlFor="cpf">CPF</label>
                <Field
                  onChange={(e) =>
                    setFieldValue('cpf', cpfMask(e.target.value))
                  }
                  id="cpf"
                  name="cpf"
                  type="text"
                />
                {errors.cpf && touched.cpf && <S.Error>{errors.cpf}</S.Error>}
              </div>

              <div>
                <label htmlFor="birth">Data de Nascimento</label>
                <Field id="birth" name="birth" type="date" />
                {errors.birth && touched.birth && (
                  <S.Error>{errors.birth}</S.Error>
                )}
              </div>
            </S.Wrapper>

            <label htmlFor="comorbidityBoolean">Tem alguma comorbidade?</label>
            <Field
              id="comorbidityBoolean"
              name="comorbidityBoolean"
              as="select"
              onChange={(e) => {
                if (e.target.value !== 'Selecione...') {
                  setFieldValue(
                    'comorbidityBoolean',
                    JSON.parse(e.target.value.toLowerCase()),
                  );
                  setComorbidity(JSON.parse(e.target.value.toLowerCase()));
                }
              }}
            >
              <option>Selecione...</option>
              <option value={true}>Sim</option>
              <option value={false}>Não</option>
            </Field>
            {errors.comorbidityBoolean && touched.comorbidityBoolean && (
              <S.Error>{errors.comorbidityBoolean}</S.Error>
            )}

            {comorbidity && (
              <div className="animeDown">
                <label htmlFor="comorbidity">Qual tipo de comorbidade?</label>
                <Field id="comorbidity" name="comorbidity" type="text" />
                {errors.comorbidity && touched.comorbidity && (
                  <S.Error>{errors.comorbidity}</S.Error>
                )}
              </div>
            )}

            <S.Wrapper>
              <div>
                <label htmlFor="dataSchedule">Data</label>
                <Field
                  id="dataSchedule"
                  name="dataSchedule"
                  type="datetime-local"
                />
                {errors.dataSchedule && touched.dataSchedule && (
                  <S.Error>{errors.dataSchedule}</S.Error>
                )}
              </div>

              <div>
                <label htmlFor="profession">Profissão</label>
                <Field id="profession" name="profession" type="text" />
                {errors.profession && touched.profession && (
                  <S.Error>{errors.profession}</S.Error>
                )}
              </div>
            </S.Wrapper>

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
                Agendar
              </G.Button>
            </S.Wrapper>
          </Form>
        )}
      </Formik>
    </S.Content>
  );
}
