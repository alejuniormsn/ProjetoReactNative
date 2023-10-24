import {SafeAreaView} from 'react-native';
import Login from './modules/login';
import {Provider} from 'react-redux';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Login />
      </SafeAreaView>
    </Provider>
  );
}
