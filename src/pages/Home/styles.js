import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  background-color: #191920;
  height: 100%;
  padding: 20px;
`;

export const Product = styled.View`
  background-color: #fff;
  width: 220px;
  border-radius: 4px;
  padding: 10px;
`;
export const Image = styled.Image`
  width: 200px;
  height: 200px;
`;

export const Title = styled.Text`
  color: #191920;
  font-size: 16px;
  padding: 10px;
`;
export const Price = styled.Text`
  font-size: 21px;
  font-weight: bold;
  padding: 10px;
`;

export const AddButton = styled.View`
  flex-direction: row;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  background-color: #7159c1;
  margin-top: auto;
`;

export const AddButtonLeft = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
  padding: 10px;
`;

export const AddButtonImage = styled(Icon).attrs({
  name: 'add-shopping-cart',
  size: 20,
  color: '#fff',
})``;

export const AddButtonAmount = styled.Text`
  color: #fff;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
