import {useState} from "react";

import {DogReducer} from "../../reducers";


function DogForm() {

    const [state, dispatch] = DogReducer();

    const [dogs, setDogs] = useState('');

    const createDog = () => {
        dispatch({type: 'addDog', payload: dogs});
        setDogs('');
    }

    return (
        <div>
            <div>
                <label>Dog: <input type="text" onChange={({target}) => setDogs(target.value)} value={dogs}/></label>
                <button onClick={createDog}>Save</button>
            </div>
            <div>
                {state.dogs.map(dog => (<div key={dog.id}>{dog.name}<button onClick={() => dispatch({ type: 'deleteDog', payload: dog.id })}>delete</button></div>))}
            </div>
        </div>
    );
}

export default DogForm;