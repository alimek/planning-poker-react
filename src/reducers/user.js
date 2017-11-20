import { generateGUID, getRandomNumber } from '../actions/user';
import { USER_LOGGED_OUT, USER_NAME_CHANGED } from '../actions/types';


const initialState = {
  pickerCard: null,
  guid: generateGUID(),
  name: `Anonymous #${getRandomNumber(0, 1000)}`,
  isReady: false,
  offline: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_LOGGED_OUT:
      return {
        ...state,
        isReady: initialState.isReady,
        pickerCard: initialState.pickerCard,
      };
    case USER_NAME_CHANGED:
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
};
