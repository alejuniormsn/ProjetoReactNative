import {SafeAreaView} from 'react-native';
import Login from './modules/login';
import {Provider} from 'react-redux';
import store from './store';
import GlobalModal from './Shared/components/modal/globalModal';

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
