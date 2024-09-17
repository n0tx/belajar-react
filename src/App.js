import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';
import AboutPage from './components/AboutPage';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Selamat datang di aplikasi saya
        </p>
        <MyButton/>
        <AboutPage/>
        <Profile/>
      </header>
    </div>
  );
}

export default App;
