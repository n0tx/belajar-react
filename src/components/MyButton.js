function MyButton({hitung, kelik}) {
    return (
        <button onClick={kelik}>
            Saya adalah tombol | Klik saya, diklik {hitung} kali
        </button>
    );
}
export default MyButton;