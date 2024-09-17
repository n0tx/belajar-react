function Profile() {
    const user = {
        name: 'Hedy Lamarr',
        // imageUrl: 'https://i.imgur.com/jzflkQt_d.webp',
        imageUrl: 'https://imgur.com/jzflkQt.jpg',
        imageSize: 90,
    };
    return(
        <>
            <h1>{user.name}</h1>
            <img
            className="avatar"
            src={user.imageUrl}
            alt={'Foto ' + user.name}
            style={{
                width: user.imageSize,
                height: user.imageSize
            }}
            />
        </>
    );
}

export default Profile;