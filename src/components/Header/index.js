import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  LogoButton,
  Logo,
  Cart,
  CartAmount,
  AmountText,
} from './styles';

import logo from '../../assets/Logo.png';

export default class Header extends Component {
  state = {};

  handleHomeNavigation = () => {
    const { navigation } = this.props;
    navigation.navigate('Home');
  };

  handleCartNavigation = () => {
    const { navigation } = this.props;
    navigation.navigate('Cart');
  };

  render() {
    return (
      <Container>
        <LogoButton onPress={this.handleHomeNavigation}>
          <Logo source={logo} />
        </LogoButton>
        <Cart onPress={this.handleCartNavigation}>
          <Icon name="shopping-cart" size={26} color="#fff" />
          <CartAmount>
            <AmountText>1</AmountText>
          </CartAmount>
        </Cart>
      </Container>
    );
  }
}
