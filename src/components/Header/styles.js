import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  border: 1px solid red;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #000;
  padding: 5px;
`;

export const LogoButton = styled(RectButton)``;

export const Logo = styled.Image`
  height: 24px;
  width: 185px;
`;

export const Cart = styled(RectButton)`
  border: 1px solid red;
  position: relative;
`;

export const CartAmount = styled.View`
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: #7159c1;
  height: 16px;
  border-radius: 8px;
  z-index: 10;
`;

export const AmountText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 0 2px 2px 2px;
`;

export const Teste = styled(RectButton)``;
