import {GlobalModalType} from './../../../Shared/components/modal/globalModal';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../hooks';
import {setModalAction} from '.';

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
    modal,
    closeModal,
    setModal,
  };
}
