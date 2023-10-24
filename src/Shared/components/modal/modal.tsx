import {IconClose, ModalContainer} from './modal.style';
import {textTypes} from '../text/textTypes';
import {theme} from '../../themes/themes';
import Button from '../button/button';
import Text from '../text/text';
import {Alert, ModalProps, Modal} from 'react-native';

interface ModalPropsReact extends ModalProps {
  title: string;
  text: string;
  onCloseModal: () => void;
}

export function ModalReact({
  title,
  text,
  onCloseModal,
  ...props
}: ModalPropsReact) {
  return (
    <Modal
      animationType="slide"
      transparent
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        onCloseModal();
      }}
      {...props}>
      <ModalContainer>
        <Text
          type={textTypes.PARAGRAPH_BOLD}
          color={theme.colors.mainTheme.primary}>
          {title}
        </Text>
        <Text style={{marginBottom: 20}}>{text}</Text>
        <Button title="OK" onPress={onCloseModal} />
        <IconClose name="cross" size={16} onPress={onCloseModal} />
      </ModalContainer>
    </Modal>
  );
}
