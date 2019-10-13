import React, { Component } from 'react';
import { connect } from 'react-redux';
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

function Header({ cartSize }) {
  handleHomeNavigation = () => {
    const { navigation } = this.props;
    navigation.navigate('Home');
  };

  handleCartNavigation = () => {
    const { navigation } = this.props;
    navigation.navigate('Cart');
  };

  return (
    <Container>
      <LogoButton onPress={this.handleHomeNavigation}>
        <Logo source={logo} />
      </LogoButton>
      <Cart onPress={this.handleCartNavigation}>
        <Icon name="shopping-cart" size={26} color="#fff" />
        <CartAmount>
          <AmountText>{cartSize}</AmountText>
        </CartAmount>
      </Cart>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
