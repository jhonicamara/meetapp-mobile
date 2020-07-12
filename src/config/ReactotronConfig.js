import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

import AsyncStorage from '@react-native-community/async-storage';

const ip = '192.168.0.30';

if (__DEV__) {
  const tron = Reactotron.configure({ host: ip })
    .setAsyncStorageHandler(AsyncStorage)
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear();

  console.tron = tron;
}
