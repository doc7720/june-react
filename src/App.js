import './App.css';

import CatForm from "./components/catForm/CatForm";
import DogForm from "./components/dogForm/DogForm";

function App() {

    return (
        <div className={'container'}>
            <div className={'cat'}>
                <CatForm/>
            </div>
            <div className={'dog'}>
                <DogForm/>
            </div>
        </div>
    );
}

export default App;


