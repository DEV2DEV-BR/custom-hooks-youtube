import './App.css';
import ChangeUserData from './components/ChangeUserData';
import Footer from './components/Footer';
import Header from './components/Header';
import { UserProvider } from './context/UserContext';

function App() {

  return (
    <UserProvider>
      <div className="App">
        <Header />
        <ChangeUserData />
        <Footer />
      </div>
    </UserProvider >
  );
}

export default App;
