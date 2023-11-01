import styled from 'styled-components/native';
import {theme} from '../../themes/themes';
import LinearGradient from 'react-native-linear-gradient';

export const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  margin-bottom: 16px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ButtonSecondary = styled(ButtonContainer)`
  border-width: 2px;
  border-color: ${theme.colors.primary};
  background-color: transparent;
`;

export const ButtonGradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ButtonActivityIndicator = styled.ActivityIndicator`
  margin: 8px;
`;

export const ButtonDisabled = styled(ButtonContainer)`
  background-color: ${theme.colors.gray100};
`;
