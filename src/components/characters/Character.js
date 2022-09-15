function Character(props) {

    const {character} = props;

    return (
        <div>
            <h1>{character.id}. {character.name}</h1>
            <p> Status: {character.status}</p>
            <img src={character.image} alt={character.name}/>
        </div>
    );
}

export default Character;