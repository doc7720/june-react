import './App.css';

import Simpsons from "./components/simpsons/Simpsons";
import Characters from "./components/characters/Characters";


function App() {

    return (
        <div className={'simpsons'}>
            <Simpsons/>
            <hr/>
            <Characters/>
        </div>
    );
}

export default App;