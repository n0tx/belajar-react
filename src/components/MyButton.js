import { useState } from "react";

function MyButton() {

    const [hitunganKlik, setHitunganKlik] = useState(0);

    function handleClick() {
        setHitunganKlik(hitunganKlik + 1);
        alert('Klik tombol oke!, ' + (hitunganKlik + 1) + ' kali diklik');
    }
    return (
        <button onClick={handleClick}>
            Saya adalah tombol | Klik saya, diklik {hitunganKlik} kali
        </button>
    );
}
export default MyButton;