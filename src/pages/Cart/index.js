import React from 'react';
import Header from '../../components/Header';
import {
  Container,
  ProductItem,
  Product,
  ProductImage,
  ProductDescription,
  ProductTitle,
  ProductPrice,
  DeleteIcon,
  ProductBar,
  Item,
  DecreaseIcon,
  ProductAmount,
  IncreaseIcon,
  Subtotal,
  Total,
  TotalText,
  TotalPrice,
  ConfirmButton,
  ButtonText,
} from './styles';

export default function Cart() {
  return (
    <>
      <Header />
      <Container>
        <Product>
          <ProductItem>
            <ProductImage
              source={{
                uri:
                  'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
              }}
            />
            <ProductDescription>
              <ProductTitle>Tênis de Caminhada Leve Confortável</ProductTitle>
              <ProductPrice>R$ 179,90</ProductPrice>
            </ProductDescription>
            <DeleteIcon />
          </ProductItem>
          <ProductBar>
            <Item>
              <DecreaseIcon />
              <ProductAmount>3</ProductAmount>
              <IncreaseIcon />
            </Item>
            <Subtotal>R$ 539,70</Subtotal>
          </ProductBar>
          <Total>
            <TotalText>TOTAL</TotalText>
            <TotalPrice>R$ 1619,10</TotalPrice>
          </Total>
          <ConfirmButton>
            <ButtonText>FINALIZAR PEDIDO</ButtonText>
          </ConfirmButton>
        </Product>
      </Container>
    </>
  );
}

Cart.navigationOptions = {
  title: 'Cart',
};
