import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { darken } from 'polished';

import SingIn from '~/pages/SignIn';
import SingUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Subscriptions from '~/pages/Subscriptions';
import Profile from '~/pages/Profile';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SingIn,
          SingUp,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
            Subscriptions,
            Profile,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#F94D6A',
              inactiveTintColor: '#fff',
              style: {
                backgroundColor: darken(0.1, '#402845'),
                height: 60,
              },
              tabStyle: {
                paddingTop: 5,
                paddingBottom: 5,
              },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
