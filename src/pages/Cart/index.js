import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
} from './styles';

function Cart({ cart, total, removeFromCart, updateAmount }) {
  // console.tron.log(cart);

  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
  }

  function increment(product) {
    updateAmount(product.id, product.amount + 1);
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
                <DeleteButton onPress={() => removeFromCart(item.id)}>
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
        <Total>
          <TotalText>TOTAL</TotalText>
          <TotalPrice>{total}</TotalPrice>
        </Total>
        <ConfirmButton>
          <ButtonText>FINALIZAR PEDIDO</ButtonText>
        </ConfirmButton>
      </Product>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subTotal: formatPrice(product.amount * product.price),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.amount * product.price;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
