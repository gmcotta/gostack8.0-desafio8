import React, { Component } from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';

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

export default class Home extends Component {
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

  handleCartNavigation = () => {
    console.tron.log('Oi');
    const { navigation } = this.props;
    navigation.navigate('Cart');
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
              <AddButton onPress={this.handleCartNavigation}>
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
