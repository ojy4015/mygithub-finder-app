// import { createContext, useReducer } from 'react'
// import githubReducer from './GithubReducer'

// const GithubContext = createContext()

// export const GithubProvider = ({ children }) => {
//   const initialState = {
//     users: [],
//     user: {},
//     repos: [],
//     loading: false,
//   }

//   const [state, dispatch] = useReducer(githubReducer, initialState)

//   return (
//     <GithubContext.Provider
//       value={{
//         ...state,
//         dispatch,
//       }}
//     >
//       {children}
//     </GithubContext.Provider>
//   )
// }

// export default GithubContext

import { createContext, useReducer, useState } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const GithubProvider = ({ children }) => {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);

  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    count: 0,
  };

  // dispatch is a method that dispatch an action to our reducer
  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Get initial users (testing purposes)
  // const fetchUsers = async () => {
  //   setLoading();
  //   const response = await fetch(`${GITHUB_URL}/users`);
  //   // const response = await fetch(`${GITHUB_URL}/users`, {
  //   //   headers: {
  //   //     Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
  //   //   }
  //   // });
  //   const data = await response.json();

  //   // console.log(data);
  //   // setUsers(data);
  //   // setLoading(false);
  //   dispatch({
  //     type: 'GET_USERS',
  //     payload: data,
  //   });
  // };

  // Search users
  // const searchUsers = async (text) => {
  //   setLoading();

  //   const params = new URLSearchParams({
  //     q: text,
  //   });
  //   const response = await fetch(`${GITHUB_URL}/search/users?${params}`);
  //   const data = await response.json(); // items array of objects

  //   // console.log(data);
  //   // setUsers(data);
  //   // setLoading(false);
  //   dispatch({
  //     type: 'SEARCH_USERS',
  //     payload: data,
  //     count: data.total_count,
  //   });
  // };

  // Get user repos
  // const getUserRepos = async (login) => {
  //   setLoading();

  //   const params = new URLSearchParams({
  //     sort: 'created',
  //     per_page: 10,
  //   });

  //   const response = await fetch(
  //     `${GITHUB_URL}/users/${login}/repos?${params}`
  //   );
  //   const data = await response.json(); // items array of objects

  //   dispatch({
  //     type: 'GET_REPOS',
  //     payload: data,
  //   });
  // };

  // Get single user
  // const getUser = async (login) => {
  //   setLoading();

  //   const response = await fetch(`${GITHUB_URL}/users/${login}`);

  //   if (response.status === 404) {
  //     window.location = '/notfound';
  //   } else {
  //     const data = await response.json(); // object
  //     dispatch({
  //       type: 'GET_USER',
  //       payload: data,
  //     });
  //   }
  // };

  // Clear users from state
  // const clearUsers = async () => {
  //   dispatch({
  //     type: 'CLEAR_USERS',
  //   });
  // };
  // Set loading
  // const setLoading = async () => {
  //   dispatch({
  //     type: 'SET_LOADING',
  //   });
  // };

  return (
    <GithubContext.Provider
      value={{
        ...state,
        // users: state.users,
        // user: state.user,
        // loading: state.loading,
        // repos: state.repos,
        // count: state.count,
        dispatch,
        // fetchUsers,
        // searchUsers,
        // clearUsers,
        // getUser,
        //getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
