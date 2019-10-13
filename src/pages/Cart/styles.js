import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  background-color: #191920;
  height: 100%;
`;

export const Product = styled.View`
  margin: 20px 20px 40px 20px;
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  max-height: 650px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const ProductItem = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductDescription = styled.View`
  flex: 1;
  padding: 10px;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
  color: #333;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
`;

export const DeleteButton = styled(RectButton)``;

export const DeleteIcon = styled(Icon).attrs({
  name: 'delete-forever',
  size: 24,
  color: '#7159c1',
})``;

export const ProductBar = styled.View`
  background-color: #eee;
  border-radius: 4px;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DecreaseIcon = styled(Icon).attrs({
  name: 'remove-circle-outline',
  size: 20,
  color: '#7159c1',
})``;
export const ProductAmount = styled.TextInput.attrs({
  editable: false,
})`
  border: 1px solid #ddd;
  background-color: #fff;
  padding: 5px 10px;
  margin: 0 10px;
`;

export const IncreaseIcon = styled(Icon).attrs({
  name: 'add-circle-outline',
  size: 20,
  color: '#7159c1',
})``;
export const Subtotal = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const Total = styled.View`
  align-items: center;
  padding: 20px;
`;
export const TotalText = styled.Text`
  color: #999;
  font-size: 16px;
`;
export const TotalPrice = styled.Text`
  font-weight: bold;
  font-size: 30px;
  padding: 10px;
`;

export const ConfirmButton = styled(RectButton)`
  background-color: #7159c1;
  border-radius: 4px;
  flex-direction: row;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  padding: 15px;
`;
