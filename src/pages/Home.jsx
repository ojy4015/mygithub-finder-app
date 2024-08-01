// import UserResults from '../components/users/UserResults'
// import UserSearch from '../components/users/UserSearch'

// function Home() {
//   return (
//     <>
//       <UserSearch />
//       <UserResults />
//     </>
//   )
// }

// export default Home

import UserResults from '../components/users/UserResults';
import UserSearch from '../components/users/UserSearch';

function Home() {
  return (
    <>
      <h1 className="text-6xl">Home</h1>
      <UserSearch />
      <UserResults />
    </>
  );
}

export default Home;
