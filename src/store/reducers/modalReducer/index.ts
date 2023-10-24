import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {GlobalModalType} from '../../../Shared/components/modal/globalModal';

interface ModalStore {
  modal: GlobalModalType;
}

const initialState: ModalStore = {
  modal: {
    visible: false,
    title: '',
    text: '',
  },
};

const modalSlice = createSlice({
  name: 'modalReducer',
  initialState,
  reducers: {
    setModalAction: (state, action: PayloadAction<GlobalModalType>) => {
      state.modal = action.payload;
    },
  },
});

export const {setModalAction} = modalSlice.actions;

const modalReducer = modalSlice.reducer;

export default modalReducer;
