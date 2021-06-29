import * as S from './style';

export function TableConsult({ data }) {
  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Dt. Nasc.</th>
            {/* <th>CPF</th> */}
            {/* <th>Profissão</th>
            <th>Comorbidade</th> */}
            <th>Dt. da Vacina</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((el) => {
              const time = el.dataSchedule.split('T')[1];
              return (
                <tr key={el.id}>
                  <td>{el.name}</td>
                  <td>{el.birth.split('-').reverse().join('/')}</td>
                  {/* <td>{el.cpf}</td> */}
                  {/* <td>{el.profession}</td>
                  <td>{el.comorbidity}</td> */}
                  <td>
                    {new Date(el.dataSchedule).toLocaleDateString('pt-BR')} as{' '}
                    {time}h
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </S.Container>
  );
}
