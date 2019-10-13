import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, Cart, Amount } from './styles';

import logo from '../../assets/Logo.png';

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Logo source={logo} />
        <Cart>
          <Icon name="shopping-cart" size={26} color="#fff" />
          <Amount style={{ color: '#fff' }}>50</Amount>
        </Cart>
      </Container>
    );
  }
}
