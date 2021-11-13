import { useState } from 'react';

export default function useUserProvider() {
  const [usersData, setUsersData] = useState({
    name: 'Daniel',
    age: 29,
    country: 'Brasil'
  });

  return {
    usersData,
    setUsersData
  }
}