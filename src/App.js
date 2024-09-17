import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Selamat datang di aplikasi saya
        </p>
        <MyButton/>
      </header>
    </div>
  );
}

export default App;
