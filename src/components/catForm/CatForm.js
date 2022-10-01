import {useState} from "react";

import {CatReducer} from "../../reducers";


function CatForm() {

    const [state, dispatch] = CatReducer();

    const [cats, setCats] = useState('');

    const createCat = () => {
        dispatch({type: 'addCat', payload: cats});
        setCats('');
    }

    return (
        <div>
            <div>
                <label>Cat: <input type="text" onChange={({target}) => setCats(target.value)} value={cats}/></label>
                <button onClick={createCat}>Save</button>
            </div>
            <div>
                {state.cats.map(cat => (<div key={cat.id}>{cat.name}<button onClick={() => dispatch({type: 'deleteCat', payload: cat.id})}>delete</button></div>))}
            </div>
        </div>
    );
}

export default CatForm;