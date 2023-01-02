import { useState } from 'react';
import { FlatList } from 'react-native';
import { Button } from '../../components/Button';
import { GroupCard } from '../../components/GroupCard';
import { Header } from '../../components/Header';
import { HightLight } from '../../components/HightLight';
import { ListEmpty } from '../../components/ListEmpty';

import * as style from './styles';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

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
        contentContainerStyle={groups.length === 0 &&{ flex: 1}}
        ListEmptyComponent={() => <ListEmpty message="Não foram encontradas turmas cadastradas."/>}
      />

      <Button title='Criar nova turma' />
    </style.Container>
  );
}

