import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const DateControl = styled.View`
  margin-top: 30px;

  display: flex;
  flex-direction: row;
  align-self: center;
  align-items: center;
`;

export const PrevDate = styled.TouchableOpacity``;

export const NextDate = styled.TouchableOpacity``;

export const DateText = styled.Text`
  padding: 0 10px;

  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})``;
