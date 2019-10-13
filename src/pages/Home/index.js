import React, { Component } from 'react';
import { connect } from 'react-redux';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

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
    const { navigation, dispatch } = this.props;
    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
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

export default connect()(Home);
