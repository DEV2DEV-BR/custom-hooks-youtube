import useUser from '../../hooks/User/useUser';
import './style.css';

export default function Header() {
  const { usersData } = useUser();

  return (
    <header>
      <h1>Custom Hooks</h1>

      <span>Bem vindo, {usersData.name}</span>
    </header>
  )
}
