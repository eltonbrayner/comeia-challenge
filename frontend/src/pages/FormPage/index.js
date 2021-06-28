import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { messageTranslate } from '../../utils/validators';

import * as S from './style'
import * as G from '../../styles/GlobalComponents'

import { Heading } from '../../components/Heading';

const schema = Yup.object().shape({
  name: Yup.string()
    .max(100, messageTranslate.maxChar(100))
    .required(messageTranslate.otherRequired),
  cpf: Yup.string()
    .max(64, messageTranslate.maxChar(64))
    .required(messageTranslate.otherRequired),
  password: Yup.string()
    .required(messageTranslate.otherRequired)
    .min(8, messageTranslate.minPassword(8))
    .max(16, messageTranslate.maxChar(16)),
  profile: Yup.string().required(messageTranslate.otherRequired),
  specialty: Yup.string().required(messageTranslate.otherRequired),
});

export const FormPage = () => 
  <>
    <Heading /> 
    <S.Content>
      <S.Form>
      <Formik
        validationSchema={schema}
        initialValues={{
          cod: '',
          name: '',
          cpf: '',
          password: '',
          profile: '',
          specialty: '',
        }}
        onSubmit={(e) => console.log(e)}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="name">Nome</label>
              <Field id="name" name="name" type="text" />
              {errors.name && touched.name && <S.Error>{errors.name}</S.Error>}
            </div>
            <S.Wrapper>
            <div>
              <label htmlFor="cpf">CPF</label>
              <Field id="cpf" name="cpf" type="text" />
              {errors.cpf && touched.cpf && <S.Error>{errors.cpf}</S.Error>}
            </div>
            <div>
              <label htmlFor="password">Data de Nascimento</label>
              <Field id="password" name="password" type="password" />
              {errors.password && touched.password && (
                <S.Error>{errors.password}</S.Error>
              )}
            </div>
            </S.Wrapper>

            <div>
              <label htmlFor="profile">Tem alguma comorbidade?</label>
              <Field id="profile" name="profile" type="text" as="select">
                <option>Selecione...</option>
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </Field>
              {errors.profile && touched.profile && (
                <S.Error>{errors.profile}</S.Error>
              )}
            </div>
            <div>
              <label htmlFor="name">Qual tipo de comorbidade?</label>
              <Field id="name" name="name" type="text" />
              {errors.name && touched.name && <S.Error>{errors.name}</S.Error>}
            </div>

            <div>
              <label htmlFor="name">Profissão</label>
              <Field id="name" name="name" type="text" />
              {errors.name && touched.name && <S.Error>{errors.name}</S.Error>}
            </div>

            <S.Wrapper>
            <div>
              <label htmlFor="specialty">Data</label>
              <Field id="specialty" name="specialty" type="text" as="select">
                <option>Selecione...</option>
                <option value="psicologo">Psicologo</option>
                <option value="pediatra">Pediatra</option>
              </Field>
              {errors.specialty && touched.specialty && (
                <S.Error>{errors.specialty}</S.Error> //specialty
              )}
            </div>

            <div>
              <label htmlFor="specialty">Hora</label>
              <Field id="specialty" name="specialty" type="text" as="select">
                <option>Selecione...</option>
                <option value="psicologo">Psicologo</option>
                <option value="pediatra">Pediatra</option>
              </Field>
              {errors.specialty && touched.specialty && (
                <S.Error>{errors.specialty}</S.Error> //specialty
              )}
            </div>
            </S.Wrapper>

            <G.Button primary type="submit">
              Agendar
            </G.Button>
          </Form>
        )}
      </Formik>
      </S.Form>
    </S.Content>
  </>