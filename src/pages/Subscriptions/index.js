import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import Background from '~/components/Background';
import Meetup from '~/components/Meetup';

import { Container, List } from './styles';

function Subscriptions({ isFocused }) {
  const [subscriptions, setSubscriptions] = useState([]);

  async function loadSubscriptions() {
    const response = await api.get('subscriptions');
    setSubscriptions(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadSubscriptions();
    }
    // eslint-disable-next-line
  }, [isFocused]);

  async function handleUnsubscription(id) {
    try {
      await api.delete(`/subscriptions/${id}`);
      Alert.alert('Inscrição desfeita', 'Encontre um novo meetup!');
    } catch (error) {
      Alert.alert('Ocorreu um erro!', 'Tente novamente mais tarde');
    }
  }

  return (
    <Background>
      <Container>
        <List
          data={subscriptions}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Meetup
              data={item.meetup}
              onSubscription={() => handleUnsubscription(item.id)}
              buttonName="Desinscrever"
            />
          )}
        />
      </Container>
    </Background>
  );
}

function SubmitIcon({ tintColor }) {
  return <Icon name="local-activity" size={20} color={tintColor} />;
}

SubmitIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Subscriptions.navigationOptions = {
  tabBarLabel: 'Subscriptions',
  tabBarIcon: SubmitIcon,
};

Subscriptions.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Subscriptions);
