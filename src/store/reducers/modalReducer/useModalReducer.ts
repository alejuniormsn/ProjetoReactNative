import {GlobalModalType} from './../../../Shared/components/modal/globalModal';
import {useDispatch} from 'react-redux';
import {setModalAction} from '.';
import {useAppSelector} from '../..';

export function useModalReducer() {
  const dispatch = useDispatch();

  function closeModal() {
    dispatch(
      setModalAction({
        ...modal,
        visible: false,
      }),
    );
  }

  function setModal(currentModal: GlobalModalType) {
    dispatch(setModalAction(currentModal));
  }

  const {modal} = useAppSelector(state => state.modalReducer);

  return {
    closeModal,
    setModal,
    modal,
  };
}
