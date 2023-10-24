import axios from 'axios';
import {useState} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {useUserReducer} from '../../../store/reducers/userReducer/useUserReducer';

export const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const {setUser} = useUserReducer();
  const {user} = useUserReducer();

  async function handleOnPress() {
    if (!email) {
      setErrorMessage('Invalid credentials');
      return;
    }

    setLoading(true);

    const URL = 'http://192.168.1.199:8080/auth';
    const payload = {email, password};

    await axios
      .post(URL, payload)
      .then(result => {
        setUser(result.data.user);
      })
      .catch(error => {
        setErrorMessage('Invalid credentials');
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleOnChangeEmail(
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) {
    setErrorMessage('');
    setEmail(event.nativeEvent.text);
  }

  function handleOnChangePassword(
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) {
    setErrorMessage('');
    setPassword(event.nativeEvent.text);
  }

  return {
    email,
    password,
    loading,
    errorMessage,
    handleOnPress,
    handleOnChangeEmail,
    handleOnChangePassword,
  };
};
