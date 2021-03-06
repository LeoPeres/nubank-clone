import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import { Container, Content, Card, CardHeader, CardContent, Title, Description, CardFooter, Annotation} from './styles';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

export default function Main() {

  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY
        }
      }
    ],
    { useNativeDriver: true }
  );

  function onHandlerStateChange(event){

  }

  return (
    <Container> 
      <Header /> 
      <Content>
        <Menu translateY={translateY}/>
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350, 380], 
                outputRange: [-50, 380],
                extrapolate: 'clamp'
              })
            }]
          }}>
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>R$1.997.611,65</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferência de R$20.00 recebida de Joao hoje as 6:00
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>

      </Content>
      <Tabs />
    </Container> 
  );
}
