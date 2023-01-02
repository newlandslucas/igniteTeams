import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { HightLight } from '../../components/HightLight';
import { Container, Content, Icon } from './styles';

export function NewGroup() {
    return(
        <Container>
            <Header showBackButton />

            <Content>
                <Icon />
                <HightLight 
                    title="Nova turma"
                    subtitle='crie uma nova turma para adicionar os participantes'
                />

                <Button title="Criar"/>
            </Content>
        </Container>
    )
}