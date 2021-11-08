import axios from 'axios';
import { useEffect, useState } from 'react';
import { User } from './types';

const BASE_URL = 'https://koreanjson.com';

const Async = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>(BASE_URL + '/users')
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  );
};

export default Async;
