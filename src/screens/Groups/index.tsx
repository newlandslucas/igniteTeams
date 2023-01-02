import { Header } from '../../components/Header';
import { HightLight } from '../../components/HightLight';
import * as style from './styles';

export function Groups() {
  return (
    <style.Container>
      <Header  />

      <HightLight
        title='Turmas'
        subtitle='Jogue com a sua turma'
      />
    </style.Container>
  );
}

