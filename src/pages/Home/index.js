import React, { Component } from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';

import {
  Container,
  Product,
  Image,
  Title,
  Price,
  AddButton,
  AddButtonLeft,
  AddButtonImage,
  AddButtonAmount,
  AddButtonText,
} from './styles';

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Container>
          <Product>
            <Image
              source={{
                uri:
                  'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
              }}
            />
            <Title>Tênis de Caminhada Leve Confortável</Title>
            <Price>R$ 179,90</Price>
            <AddButton>
              <AddButtonLeft>
                <AddButtonImage />
                <AddButtonAmount>1</AddButtonAmount>
              </AddButtonLeft>
              <AddButtonText>ADICIONAR</AddButtonText>
            </AddButton>
          </Product>
        </Container>
      </>
    );
  }
}

Home.navigationOptions = {
  title: 'Home',
};
