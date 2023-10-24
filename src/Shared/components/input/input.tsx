import {TextInputProps, View} from 'react-native';
import {IconEye, InputContainer, InputContent} from './input.style';
import Text from '../text/text';
import {textTypes} from '../text/textTypes';
import {theme} from '../../themes/themes';
import {useState} from 'react';

interface InputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
  secureTextEntry?: boolean;
  marginBottom?: string;
}

export default function Input({
  title,
  errorMessage,
  secureTextEntry,
  marginBottom = '8px',
  ...props
}: InputProps) {
  const [currentSecure, setCurrentSecure] = useState<boolean>(
    !!secureTextEntry,
  );

  function handleOnPress() {
    setCurrentSecure(current => !current);
  }

  return (
    <InputContainer {...props} marginBottom={marginBottom}>
      {title && (
        <View style={{marginLeft: 10}}>
          <Text
            color={theme.colors.grayTheme.gray100}
            type={textTypes.PARAGRAPH_SMALL_BOLD}>
            {title}
          </Text>
        </View>
      )}
      <View>
        <InputContent
          {...props}
          isError={!!errorMessage}
          secureTextEntry={currentSecure}
          hasSecureTextEntry={secureTextEntry}
        />
        {secureTextEntry && (
          <IconEye
            name={currentSecure ? 'eye' : 'eye-blocked'}
            size={20}
            color={theme.colors.grayTheme.gray100}
            onPress={handleOnPress}
          />
        )}
      </View>
      {errorMessage && (
        <View style={{marginLeft: 10}}>
          <Text
            type={textTypes.PARAGRAPH_SMALL_REGULAR}
            color={theme.colors.orangeTheme.orange80}>
            {errorMessage}
          </Text>
        </View>
      )}
    </InputContainer>
  );
}
