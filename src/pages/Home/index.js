import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
} from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }
    loadProducts();
  }, []);

  const dispatch = useDispatch();

  function handleCartNavigation(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  const amount = useSelector(state =>
    state.cart.reduce((amountResult, product) => {
      amountResult[product.id] = product.amount;
      return amountResult;
    }, {})
  );

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
            <AddButton onPress={() => handleCartNavigation(item.id)}>
              <AddButtonLeft>
                <AddButtonImage />
                <AddButtonAmount>{amount[item.id] || 0}</AddButtonAmount>
              </AddButtonLeft>
              <AddButtonText>ADICIONAR</AddButtonText>
            </AddButton>
          </Product>
        )}
      />
    </Container>
  );
}
