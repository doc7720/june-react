function Simpson(props) {

    const {simpson} = props;

    return (
        <div>
            <h1>{simpson.name} {simpson.surname} - {simpson.age} years</h1>
            <p>{simpson.info}</p>
            <img src={simpson.photo} alt={simpson.name}/>
        </div>
    );
}

export default Simpson;