/**
 * Export object with new chore
 * @param {object} items - new chore
 */
export function createNewChore(items) {
  return {
    type: 'CREATE_NEW_CHORE',
    items,
  };
}

/**
 * Export object of deleted ID
 * @param {number} id  - Chore ID
 */
export function deleteChore(id) {
  return {
    type: 'DELETE_CHORE',
    id,
  };
}

/**
 * Export object of updated chore
 * @param {numbere} id - Chore ID 
 */
export function updateCompleteChore(id) {
  return {
    type: 'UPDATE_COMPLETE_CHORE',
    id,
  };
}

/**
 * Create new chore
 * @param {object} chore - New Chore
 */
export function newChore(chore) {
  return (dispatch) => {
    dispatch(createNewChore(chore));
  };
}

/**
 * Delete one chore
 * @param {number} id - ID of Chore
 */
export function deleteOneChore(id) {
  return (dispatch) => {
    dispatch(deleteChore(id));
  };
}

/**
 * Update one chore to flag as completed
 * @param {number} id - ID of Chore 
 */
export function updateChore(id) {
  return (dispatch) => {
    dispatch(updateCompleteChore(id));
  };
}