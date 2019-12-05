import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import QRCode from 'react-native-qrcode';

import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles';

export default function Menu({translateY}) {
  return (
    <Container style={{
        opacity: translateY.interpolate({
            inputRange: [0, 150],
            outputRange: [0, 1]
        })
    }}>
        <Code>
            <QRCode
                value="https://rocketseat.com.br"
                size={80}
                fgColor="#FFF"
                bgColor="#8B1AE"
            />
        </Code>

        <Nav>
            <NavItem>
                <Icon name="help-outline" size={20} color='#FFF' />
                <NavText>Me Ajuda</NavText>
            </NavItem>
            <NavItem>
                <Icon name="person-outline" size={20} color='#FFF' />
                <NavText>Perfil</NavText>
            </NavItem>
            <NavItem>
                <Icon name="credit-card" size={20} color='#FFF' />
                <NavText>Configurar cartão</NavText>
            </NavItem>
            <NavItem>
                <Icon name="smartphone" size={20} color='#FFF' />
                <NavText>Configurações do APP</NavText>
            </NavItem>
        </Nav>

        <SignOutButton onPress={()=>{}}>
            <SignOutButtonText>Sair do App</SignOutButtonText>
        </SignOutButton>
    </Container>
  );
}