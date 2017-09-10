const initialState = {
  chores: [],
};

/**
 * Reducer for chores
 * @param {object} state - Chores
 * @param {object} action - Action type.
 */
export default function chores(state = initialState, action) {
  const newState = { ...state };
  switch (action.type) {
    case 'CREATE_NEW_CHORE':
    newState.chores.push(action.items);
    return newState;
  case 'DELETE_CHORE':
    newState.chores.pop(action.id);
    return newState;
  case 'UPDATE_COMPLETE_CHORE':
    newState.chores.map((chore) => {
      if (chore.id == action.id) {
        chore.completed = !chore.completed
      }
    });
    return newState;
  default:
    return newState;
  }
}