import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  ProductItem,
  Product,
  List,
  ProductImage,
  ProductDescription,
  ProductTitle,
  ProductPrice,
  DeleteButton,
  DeleteIcon,
  ProductBar,
  Item,
  DecreaseButton,
  DecreaseIcon,
  ProductAmount,
  IncreaseButton,
  IncreaseIcon,
  Subtotal,
  Total,
  TotalText,
  TotalPrice,
  ConfirmButton,
  ButtonText,
  NoProductContainer,
  NoProductIcon,
  NoProductText,
} from './styles';

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subTotal: formatPrice(product.amount * product.price),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalResult, product) => {
        return totalResult + product.amount * product.price;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  return (
    <Container>
      <Product>
        <List
          data={cart}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <>
              <ProductItem>
                <ProductImage
                  source={{
                    uri: item.image,
                  }}
                />
                <ProductDescription>
                  <ProductTitle>{item.title}</ProductTitle>
                  <ProductPrice>{item.priceFormatted}</ProductPrice>
                </ProductDescription>
                <DeleteButton
                  onPress={() => dispatch(CartActions.removeFromCart(item.id))}
                >
                  <DeleteIcon />
                </DeleteButton>
              </ProductItem>
              <ProductBar>
                <Item>
                  <DecreaseButton onPress={() => decrement(item)}>
                    <DecreaseIcon />
                  </DecreaseButton>
                  <ProductAmount>{item.amount}</ProductAmount>
                  <IncreaseButton onPress={() => increment(item)}>
                    <IncreaseIcon />
                  </IncreaseButton>
                </Item>
                <Subtotal>{item.subTotal}</Subtotal>
              </ProductBar>
            </>
          )}
        />
        {cart.length ? (
          <>
            <Total>
              <TotalText>TOTAL</TotalText>
              <TotalPrice>{total}</TotalPrice>
            </Total>
            <ConfirmButton>
              <ButtonText>FINALIZAR PEDIDO</ButtonText>
            </ConfirmButton>
          </>
        ) : (
          <NoProductContainer>
            <NoProductIcon />
            <NoProductText>Seu carrinho está vazio</NoProductText>
          </NoProductContainer>
        )}
      </Product>
    </Container>
  );
}
