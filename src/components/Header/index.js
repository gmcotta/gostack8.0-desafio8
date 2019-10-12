import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, Cart, Amount } from './styles';

import logo from '../../assets/Logo.png';

export default function Header() {
  return (
    <Container>
      <Logo source={logo} />
      <Cart>
        <Icon name="shopping-cart" size={26} color="#fff" />
        <Amount style={{ color: '#fff' }}>1</Amount>
      </Cart>
    </Container>
  );
}
