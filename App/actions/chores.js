import chores from '../mock/chores.json';

/**
 * Export object of error state
 * @param {boolean} bool - Error state
 */
export const choresHasErrored = (bool) => ({
  type: 'CHORES_HAS_ERRORED',
  hasErrored: bool,
});

/**
 * Export object of loading state
 * @param {boolean} bool - Loading state 
 */
export const choresIsLoading = (bool) => ({
  type: 'CHORES_IS_LOADING',
  isLoading: bool,
});

/**
 * Export object if chore is successful
 * @param {object} items - new list of chores
 */
export const choresIsSuccessful = (items) => ({
  type: 'CHORES_IS_SUCCESSFUL',
  items,
});

/**
 * Export object with new chore
 * @param {object} items - new chore
 */
export const createNewChore = (items) => ({
  type: 'CREATE_NEW_CHORE',
  items,
});


/**
 * Export object of deleted ID
 * @param {number} id  - Chore ID
 */
export const deleteChore = (id) => ({
  type: 'DELETE_CHORE',
  id,
});

/**
 * Export object of updated chore
 * @param {numbere} id - Chore ID 
 */
export const updateCompleteChore = (id) => ({
  type: 'UPDATE_COMPLETE_CHORE',
  id,
});

/**
 * Fetch chores
 */
export const fetchChores = () => (dispatch) => {
  dispatch(choresIsSuccessful(chores));
}

/**
 * Create new chore
 * @param {object} chore - New Chore
 */
export const newChore = (chore) => (dispatch) => {
  const newChore = {
    id: parseInt(Math.random() * 1000),
    name: chore.name,
    completed: false,
    due: chore.due,
  };
  dispatch(createNewChore(newChore));
}

/**
 * Delete one chore
 * @param {number} id - ID of Chore
 */
export const deleteOneChore = (id) => (dispatch) => {
  dispatch(deleteChore(id));
}

/**
 * Update one chore to flag as completed
 * @param {number} id - ID of Chore 
 */
export const updateChore = (id) => (dispatch) => {
  dispatch(updateCompleteChore(id));
}