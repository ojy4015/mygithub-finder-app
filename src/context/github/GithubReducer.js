const githubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case 'SEARCH_USERS':
      return {
        ...state,
        users: action.payload.items,
        loading: false,
        count: action.count,
      };
    // case 'GET_USER':
    //   return {
    //     ...state,
    //     user: action.payload,
    //     loading: false,
    //   };
    // case 'GET_REPOS':
    //   return {
    //     ...state,
    //     repos: action.payload,
    //     loading: false,
    //   };
    case 'GET_USER_AND_REPOS':
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
        count: 0,
      };
    default:
      return state;
  }
};

export default githubReducer;
