import Text from '../text/text';
import {theme} from '../../themes/themes';
import {textTypes} from '../text/textTypes';
import {TouchableOpacityProps} from 'react-native';
import {
  ButtonActivityIndicator,
  ButtonContainer,
  ButtonSecondary,
  ButtonGradient,
  ButtonDisabled,
} from './button.style';

interface TouchableProps extends TouchableOpacityProps {
  title: string;
  type?: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
}

export default function Button({
  title,
  type,
  disabled,
  loading,
  onPress,
  ...props
}: TouchableProps) {
  if (disabled) {
    return (
      <ButtonDisabled {...props}>
        {renderText(theme.colors.grayTheme.gray50)}
      </ButtonDisabled>
    );
  }

  function handleOnPress() {
    if (!loading && !disabled && onPress) {
      onPress();
    }
  }

  function renderText(color: string) {
    return (
      <>
        <Text type={textTypes.BUTTON_REGULAR} color={color}>
          {title}
        </Text>
        {loading && <ButtonActivityIndicator color={color} />}
      </>
    );
  }

  switch (type) {
    case theme.buttons.buttonsTheme.secondary:
      return (
        <ButtonSecondary {...props} onPress={handleOnPress}>
          {renderText(theme.colors.mainTheme.primary)}
        </ButtonSecondary>
      );

    case theme.buttons.buttonsTheme.primary:
    default:
      return (
        <ButtonContainer {...props} onPress={handleOnPress}>
          <ButtonGradient
            start={{x: 0.0, y: 0.0}}
            end={{x: 1.0, y: 1.1}}
            colors={[
              theme.colors.purpleTheme.purple80,
              theme.colors.pinkTheme.pink80,
            ]}>
            {renderText(theme.colors.neutralTheme.white)}
          </ButtonGradient>
        </ButtonContainer>
      );
  }
}
