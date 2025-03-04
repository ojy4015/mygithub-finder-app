import axios from 'axios';
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
  baseURL: GITHUB_URL,
  // headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

// // Get search results
// export const searchUsers = async (text) => {
//   const params = new URLSearchParams({
//     q: text,
//   })

//   const response = await github.get(`/search/users?${params}`)
//   return response.data.items
// }

// // Get user and repos
// export const getUserAndRepos = async (login) => {
//   const [user, repos] = await Promise.all([
//     github.get(`/users/${login}`),
//     github.get(`/users/${login}/repos`),
//   ])

//   return { user: user.data, repos: repos.data }
// }

// import axios from 'axios'
// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

// const github = axios.create({
//   baseURL: GITHUB_URL,
//   headers: { Authorization: `token ${GITHUB_TOKEN}` },
// })

// // Get search results
// export const searchUsers = async (text) => {
//   const params = new URLSearchParams({
//     q: text,
//   })

//   const response = await github.get(`/search/users?${params}`)
//   return response.data.items
// }

// // Get user and repos
// export const getUserAndRepos = async (login) => {
//   const [user, repos] = await Promise.all([
//     github.get(`/users/${login}`),
//     github.get(`/users/${login}/repos`),
//   ])

//   return { user: user.data, repos: repos.data }
// }

// Search users
export const searchUsers = async (text) => {
  // setLoading();

  const params = new URLSearchParams({
    q: text,
  });
  // const response = await fetch(`${GITHUB_URL}/search/users?${params}`);
  const response = await github.get(`/search/users?${params}`);
  // const data = await response.json(); // items array of objects

  // console.log(data);
  // setUsers(data);
  // setLoading(false);
  // dispatch({
  //   type: 'SEARCH_USERS',
  //   payload: data,
  //   count: data.total_count,
  // });

  // return data;
  return response.data;
};

// Get single user
// export const getUser = async (login) => {
//   // setLoading();

//   const response = await fetch(`${GITHUB_URL}/users/${login}`);

//   if (response.status === 404) {
//     window.location = '/notfound';
//   } else {
//     const data = await response.json(); // object
//     // dispatch({
//     //   type: 'GET_USER',
//     //   payload: data,
//     // });
//     return data;
//   }
// };

// Get user repos
// export const getUserRepos = async (login) => {
//   //setLoading();

//   const params = new URLSearchParams({
//     sort: 'created',
//     per_page: 10,
//   });

//   const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`);
//   const data = await response.json(); // items array of objects

//   // dispatch({
//   //   type: 'GET_REPOS',
//   //   payload: data,
//   // });
//   return data;
// };

// Get single user and user repos
export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  });

  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?${params}`),
  ]);

  return { user: user.data, repos: repos.data };
};

// Get user repos
// export const getUserRepos = async (login) => {
//   //setLoading();

//   const params = new URLSearchParams({
//     sort: 'created',
//     per_page: 10,
//   });

//   const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`);
//   const data = await response.json(); // items array of objects

//   // dispatch({
//   //   type: 'GET_REPOS',
//   //   payload: data,
//   // });
//   return data;
// };
