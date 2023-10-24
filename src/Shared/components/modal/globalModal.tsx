import {ModalReact} from './modal';
import {useModalReducer} from '../../../store/reducers/modalReducer/useModalReducer';

export interface GlobalModalType {
  visible: boolean;
  title: string;
  text: string;
}

export default function GlobalModal() {
  const {modal, closeModal} = useModalReducer();

  return (
    <ModalReact
      title={modal.title}
      text={modal.text}
      visible={modal.visible}
      onCloseModal={closeModal}
    />
  );
}
