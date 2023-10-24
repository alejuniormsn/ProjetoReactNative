import {TextProps as TextPropsNative} from 'react-native';
import {TextContainer} from './text.style';
import {useMemo} from 'react';
import {textTypes} from './textTypes';

interface TextProps extends TextPropsNative {
  color?: string;
  type?: string;
}

export default function Text({color, type, ...props}: TextProps) {
  const fontSize = useMemo(() => {
    switch (type) {
      case textTypes.TITLE_BOLD:
      case textTypes.TITLE_LIGHT:
      case textTypes.TITLE_REGULAR:
        return '28px';
      case textTypes.SUB_TITLE_BOLD:
      case textTypes.SUB_TITLE_LIGHT:
      case textTypes.SUB_TITLE_REGULAR:
        return '20px';
      case textTypes.BUTTON_BOLD:
      case textTypes.BUTTON_LIGHT:
      case textTypes.BUTTON_REGULAR:
        return '16px';
      case textTypes.PARAGRAPH_SMALL_BOLD:
      case textTypes.PARAGRAPH_SMALL_LIGHT:
      case textTypes.PARAGRAPH_SMALL_REGULAR:
        return '12px';
      case textTypes.PARAGRAPH_BOLD:
      case textTypes.PARAGRAPH_LIGHT:
      case textTypes.PARAGRAPH_REGULAR:
      default:
        return '16px';
    }
  }, [type]);

  const fontFamily = useMemo(() => {
    switch (type) {
      case textTypes.BUTTON_BOLD:
      case textTypes.TITLE_BOLD:
      case textTypes.SUB_TITLE_BOLD:
      case textTypes.PARAGRAPH_BOLD:
      case textTypes.PARAGRAPH_SMALL_BOLD:
        return 'Poppins-Bold';
      case textTypes.BUTTON_LIGHT:
      case textTypes.TITLE_LIGHT:
      case textTypes.SUB_TITLE_LIGHT:
      case textTypes.PARAGRAPH_LIGHT:
      case textTypes.PARAGRAPH_SMALL_LIGHT:
        return 'Poppins-Light';
      case textTypes.BUTTON_REGULAR:
      case textTypes.TITLE_REGULAR:
      case textTypes.SUB_TITLE_REGULAR:
      case textTypes.PARAGRAPH_REGULAR:
      case textTypes.PARAGRAPH_SMALL_REGULAR:
      default:
        return 'Poppins-Regular';
    }
  }, [type]);

  return (
    <TextContainer
      fontFamily={fontFamily}
      fontSize={fontSize}
      color={color}
      {...props}
    />
  );
}
