import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Banner,
  Info,
  TextInfo,
  Title,
  InfoRow,
  SubButton,
  ButtonText,
} from './styles';

export default function Meetup({ data, onSubscription, buttonName }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.date), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.date]);

  console.log(data.image.url);

  return (
    <Container>
      <Banner
        source={{
          uri: data.image.url,
        }}
      />
      <Info>
        <Title>{data.title}</Title>
        <InfoRow>
          <Icon name="event" size={20} color="#a39ca5" />
          <TextInfo>{dateParsed}</TextInfo>
        </InfoRow>
        <InfoRow>
          <Icon name="location-on" size={20} color="#a39ca5" />
          <TextInfo>{data.location}</TextInfo>
        </InfoRow>
        <InfoRow>
          <Icon name="person" size={20} color="#a39ca5" />
          <TextInfo>Meetup organizado por: {data.user.name}</TextInfo>
        </InfoRow>
        <SubButton onPress={onSubscription}>
          <ButtonText>{buttonName}</ButtonText>
        </SubButton>
      </Info>
    </Container>
  );
}

Meetup.propTypes = {
  data: PropTypes.shape().isRequired,
  onSubscription: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
};
