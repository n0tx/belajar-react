import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';
import AboutPage from './components/AboutPage';
import Profile from './components/Profile';
import ListVegetables from './components/ListVegetables';
import { useState } from "react";

function App() {
    const [hitunganKlik, setHitunganKlik] = useState(0);

    function handleClick() {
        setHitunganKlik(hitunganKlik + 1);
        alert('Klik tombol oke!, ' + (hitunganKlik + 1) + ' kali diklik');
    }
    return (
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Selamat datang di aplikasi saya
            </p>
            <MyButton hitung={hitunganKlik} kelik={handleClick}/>
            <MyButton hitung={hitunganKlik} kelik={handleClick}/>
            {/* <MyButton hitunganKlik={hitunganKlik} onClick={handleClick}/> */}
            <AboutPage/>
            <Profile/>
            <ListVegetables/>
        </header>
        </div>
    );
}

export default App;
