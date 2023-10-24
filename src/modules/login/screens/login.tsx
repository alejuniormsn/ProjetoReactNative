import {Image, View} from 'react-native';
import {LoginContainer} from './login.style';
import Input from '../../../Shared/components/input/input';
import Button from '../../../Shared/components/button/button';
import Text from '../../../Shared/components/text/text';
import {textTypes} from '../../../Shared/components/text/textTypes';
import {theme} from '../../../Shared/themes/themes';
import {useLogin} from '../hooks/useLogin';

export default function Login() {
  const {
    email,
    password,
    loading,
    errorMessage,
    handleOnPress,
    handleOnChangeEmail,
    handleOnChangePassword,
  } = useLogin();

  return (
    <View>
      <LoginContainer>
        <Image
          resizeMode="center"
          source={require('../../../assets/images/Logo.jpg')}
        />
        <Text
          color={theme.colors.grayTheme.gray150}
          type={textTypes.TITLE_REGULAR}>
          Login
        </Text>
        <Input
          title="E-mail:"
          placeholder="Digite seu e-mail"
          errorMessage={errorMessage}
          onChange={handleOnChangeEmail}
          value={email}
        />
        <Input
          title="Password:"
          placeholder="Digite sua senha"
          secureTextEntry
          marginBottom={'16px'}
          errorMessage={errorMessage}
          onChange={handleOnChangePassword}
          value={password}
        />
        <Button
          type={theme.buttons.buttonsTheme.primary}
          title="ENTRAR"
          onPress={handleOnPress}
          loading={loading}
        />
        <Button
          type={theme.buttons.buttonsTheme.secondary}
          title="Esqueci minha senha"
          onPress={handleOnPress}
        />
      </LoginContainer>
    </View>
  );
}
