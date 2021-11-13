import useUser from '../../hooks/User/useUser';
import './style.css';

export default function Footer() {
  const { usersData } = useUser();

  return (
    <footer>
      <ul>
        <li>{usersData.name}</li>
        <li>{usersData.age}</li>
        <li>{usersData.country}</li>
      </ul>

    </footer>
  )
}
