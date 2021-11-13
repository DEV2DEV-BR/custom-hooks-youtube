import { useState } from 'react';
import useUser from '../../hooks/User/useUser';
import './style.css';

export default function ChangeUserData() {
  const { setUsersData } = useUser();

  const [form, setForm] = useState({
    inputName: '',
    inputAge: '',
    inputCountry: ''
  });

  function handleUpdateForm({ target }) {
    setForm({ ...form, [target.name]: target.value })
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.inputName || !form.inputAge || !form.inputCountry) {
      return;
    }
    setUsersData({
      name: form.inputName,
      age: form.inputAge,
      country: form.inputCountry
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="inputName"
        placeholder="Name"
        value={form.inputName}
        onChange={(e) => handleUpdateForm(e)}
      />
      <input
        type="number"
        name="inputAge"
        placeholder="Age"
        value={form.inputAge}
        onChange={(e) => handleUpdateForm(e)}
      />
      <input
        name="inputCountry"
        type="text"
        placeholder="Country"
        value={form.inputCountry}
        onChange={(e) => handleUpdateForm(e)}
      />
      <button>Confirmar</button>
    </form>
  )
}