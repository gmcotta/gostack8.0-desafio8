import React from 'react';
import { connect } from 'react-redux';
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

function Header({ navigation, cartSize }) {
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
  cartSize: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Header);
