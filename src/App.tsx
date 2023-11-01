import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store';

import GlobalModal from './Shared/components/modal/globalModal';
import Login from './screens/login/login';

export default function App() {
  return (
    <Provider store={store}>
      <GlobalModal />
      <SafeAreaView>
        <Login />
      </SafeAreaView>
    </Provider>
  );
}
