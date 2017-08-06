const initialState = {
  firstName: '',
  lastName: '',
};

/**
 * Reducer for user registration
 * @param {object} state - User admin state.
 * @param {object} action - Action type.
 */
export default function user(state = initialState, action) {
  const newState = { ...state };
  switch (action.type) {
    case 'USER_REGISTERED':
      newState.firstName = action.firstName;
      newState.lastName = action.lastName;
      return newState;
    case 'USER_DELETE':
      newState.firstName = '';
      newState.lastName = '';
      return newState;
    default:
      return newState;
  }
}
