const alertReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ALERT':
      return action.payload; // return  { msg, type }

    case 'REMOVE_ALERT':
      return null; // initial state
    default:
      return state;
  }
};

export default alertReducer;
