import React, { useState, useMemo, useEffect } from 'react';
import { Alert } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { format, subDays, addDays } from 'date-fns';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';
import Meetup from '~/components/Meetup';

import {
  Container,
  DateControl,
  PrevDate,
  NextDate,
  DateText,
  List,
} from './styles';

function Dashboard({ isFocused }) {
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(() => format(date, 'dd/MM/yyyy'), [date]);

  async function loadMeetups() {
    const dateSchedule = format(date, 'yyyy-MM-dd');
    const response = await api.get('schedule', {
      params: { date: dateSchedule, page: 1 },
    });

    setSchedule(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadMeetups();
    }
    // eslint-disable-next-line
  }, [isFocused, date]);

  async function handleSubscription(id) {
    try {
      await api.post('subscriptions', {
        meetup_id: id,
      });
      Alert.alert('Inscrição realizada!!!', 'Acesse a página de inscrições');
    } catch (error) {
      Alert.alert('Ocorreu um erro!', 'Tente novamente mais tarde');
    }
  }

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Background>
      <Container>
        <DateControl>
          <PrevDate onPress={() => handlePrevDay()}>
            <Icon name="chevron-left" size={40} color="#fff" />
          </PrevDate>
          <DateText>{dateFormatted}</DateText>
          <NextDate onPress={() => handleNextDay()}>
            <Icon name="chevron-right" size={40} color="#fff" />
          </NextDate>
        </DateControl>

        <List
          data={schedule}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Meetup
              data={item}
              onSubscription={() => handleSubscription(item.id)}
              buttonName="Inscrever"
            />
          )}
        />
      </Container>
    </Background>
  );
}

function SubmitIcon({ tintColor }) {
  return <Icon name="event" size={20} color={tintColor} />;
}

SubmitIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: SubmitIcon,
};

Dashboard.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Dashboard);
