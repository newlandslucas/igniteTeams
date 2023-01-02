import { useState } from 'react';
import { FlatList } from 'react-native';
import { GroupCard } from '../../components/GroupCard';
import { Header } from '../../components/Header';
import { HightLight } from '../../components/HightLight';

import * as style from './styles';

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Galera de SP', 'Galera do trabalho']);

  return (
    <style.Container>
      <Header  />

      <HightLight
        title='Turmas'
        subtitle='Jogue com a sua turma'
      />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => <GroupCard title={item}/>}
      />
    </style.Container>
  );
}

