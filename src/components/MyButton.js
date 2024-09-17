function MyButton() {
    function handleClick() {
        alert('Klik tombol oke!');
    }
    return (
        <button onClick={handleClick}>Saya adalah tombol | Klik saya</button>
    );
}
export default MyButton;