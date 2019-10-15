import React from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import PropTypes from 'prop-types';

import { SafeAreaView } from 'react-navigation';
import {
  Container,
  LogoButton,
  Logo,
  Cart,
  CartAmount,
  AmountText,
} from './styles';

import logo from '../../assets/Logo.png';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

  function handleHomeNavigation() {
    navigation.navigate('Home');
  }

  function handleCartNavigation() {
    navigation.navigate('Cart');
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#141419',
      }}
    >
      <Container>
        <LogoButton onPress={() => handleHomeNavigation()}>
          <Logo source={logo} />
        </LogoButton>
        <Cart onPress={() => handleCartNavigation()}>
          <Icon name="shopping-cart" size={26} color="#fff" />
          {cartSize ? (
            <CartAmount>
              <AmountText>{cartSize}</AmountText>
            </CartAmount>
          ) : (
            <></>
          )}
        </Cart>
      </Container>
    </SafeAreaView>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
