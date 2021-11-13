import { createContext } from 'react';
import useUserProvider from '../../hooks/User/useUserProvider';
const UserContext = createContext({});

export function UserProvider(props) {
  const { usersData, setUsersData } = useUserProvider();

  return (
    <UserContext.Provider value={{
      usersData,
      setUsersData
    }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContext