import {LOGIN, LOG_OUT, UPDATE_USER} from '../authAction';

const initialState = {
  user: {},
  token: '',
  isGuest: true,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      console.log(
        'user data ................................................',
        action.payload.user,
      );
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isGuest: false,
      };
    case LOG_OUT:
      console.log('logout is running ...................................................');
      return {
        ...state,
        user: {},
        token: '',
        isGuest: true,
      };
    case UPDATE_USER:
      console.log(
        'user data ................................................',
        action.payload,
      );
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };

    default:
      return state; //must be like this so it can  presist the reducers
  }
}
