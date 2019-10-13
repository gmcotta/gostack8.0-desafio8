import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import api from '../../services/api';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  List,
  Product,
  Image,
  Title,
  Price,
  AddButton,
  AddButtonLeft,
  AddButtonImage,
  AddButtonAmount,
  AddButtonText,
  Teste,
} from './styles';
import Cart from '../Cart';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({
      products: data,
    });
  }

  handleCartNavigation = product => {
    const { navigation, addToCart } = this.props;
    addToCart(product);
    // navigation.navigate('Cart');
  };

  render() {
    const { products } = this.state;

    return (
      <Container>
        <List
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <Product>
              <Image
                source={{
                  uri: item.image,
                }}
              />
              <Title>{item.title}</Title>
              <Price>{item.priceFormatted}</Price>
              <AddButton onPress={() => this.handleCartNavigation(item)}>
                <AddButtonLeft>
                  <AddButtonImage />
                  <AddButtonAmount>1</AddButtonAmount>
                </AddButtonLeft>
                <AddButtonText>ADICIONAR</AddButtonText>
              </AddButton>
            </Product>
          )}
        />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Home);
