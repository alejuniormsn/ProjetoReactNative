import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {userType} from '../../../Shared/types/userType';

interface UserStore {
  user?: userType;
}

const initialState: UserStore = {
  user: undefined,
};

const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUserAction: (state, action: PayloadAction<userType>) => {
      state.user = action.payload;
    },
  },
});

export const setUserAction = userSlice.actions.setUserAction;

const userReducer = userSlice.reducer;
export default userReducer;
