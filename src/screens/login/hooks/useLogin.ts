import axios, {AxiosRequestConfig} from 'axios';
import {useState} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {useUserReducer} from '../../../store/reducers/userReducer/useUserReducer';
import {useModalReducer} from '../../../store/reducers/modalReducer/useModalReducer';

export const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const {setUser} = useUserReducer();

  const {setModal} = useModalReducer();

  async function handleOnPress() {
    if (!email) {
      setErrorMessage('credenciais inválidas');
      return;
    }

    setLoading(true);

    const URL = 'http://192.168.1.199:8080/auth';
    const payload = {email, password};
    const token: AxiosRequestConfig = {
      headers: {
        Authorization: 'Bearer: token',
        'Content-Type': 'application/json',
      },
    };

    await axios
      .post(URL, payload)
      .then(result => {
        setUser(result.data.user);
        console.log('Resulte Login => ', result.data.user);
      })
      .catch(erro => {
        setModal({
          title: 'Erro',
          text: `${erro}`,
          visible: true,
        });
        setErrorMessage('credenciais inválidas');
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
