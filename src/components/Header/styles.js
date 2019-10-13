import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #000;
  padding: 20px;
`;

export const Logo = styled.Image`
  height: 24px;
  width: 185px;
`;

export const Cart = styled.View`
  position: relative;
  padding: 5px;
`;

export const Amount = styled.Text`
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: #7159c1;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  z-index: 10;
`;
