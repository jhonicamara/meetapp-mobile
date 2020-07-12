import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  display: flex;
  margin-bottom: 15px;
  border-radius: 4px;
  background: #fff;
`;

export const Banner = styled.Image.attrs({
  resizeMode: 'cover',
})`
  border-radius: 4px;
  width: 100%;
  height: 150px;
  align-content: stretch;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Info = styled.View`
  padding: 10px;
`;

export const TextInfo = styled.Text`
  margin-left: 5px;
  color: #a39ca5;
`;

export const InfoRow = styled.View`
  display: flex;
  flex-direction: row;

  margin-bottom: 10px;

  align-items: center;
`;

export const SubButton = styled(RectButton)`
  height: 46px;
  background: #f94d6a;
  border-radius: 4px;

  margin-top: 10px;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
