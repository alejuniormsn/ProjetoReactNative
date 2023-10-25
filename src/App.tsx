import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store';
import Login from './modules/login';
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
