import {useDispatch} from 'react-redux';
import {userType} from '../../../Shared/types/userType';
import {setUserAction} from '.';
import {useAppSelector} from '../..';

export function useUserReducer() {
  const dispatch = useDispatch();

  function setUser(currentUser: userType) {
    dispatch(setUserAction(currentUser));
  }

  const {user} = useAppSelector(state => state.userReducer);

  return {
    setUser,
    user,
  };
}
