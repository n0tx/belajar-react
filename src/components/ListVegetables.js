function ListVegetables() {
    
    const vegetables = [
        {title: 'Bayam', isFruit: false, id: 1},
        {title: 'Kol', isFruit: false, id: 2},
        {title: 'Semangka', isFruit: true, id: 3},
        {title: 'Kangkung', isFruit: false, id: 4},
        {title: 'Apel', isFruit: true, id: 5},
    ]

    var listVegetables = [];
    for (let i = 0; i < vegetables.length; i++) {
        const vegetable = vegetables[i];
        listVegetables.push(<li 
        key={vegetable.id}
        style={{
            color: vegetable.isFruit ? 'red' : 'darkgreen'
        }}
        >{vegetable.title}</li>);
    }
    return (
        <ul>{listVegetables}</ul>
    );
}

export default ListVegetables;