import './App.css';
import {Link, Route, Routes} from "react-router-dom";

import Home from "./components/home/Home";
import Todos from "./components/todos/Todos";
import Albums from "./components/albums/Albums";
import Comments from "./components/comments/Comments";
import Posts from "./components/posts/Posts";


function App() {

    return (
        <div>
            <div>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'todos'}>Todos</Link></li>
                    <li><Link to={'albums'}>Albums</Link></li>
                    <li><Link to={'comments'}>Comments</Link></li>
                </ul>
            </div>
            <hr/>
            <div>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'todos'} element={<Todos/>}/>
                    <Route path={'albums'} element={<Albums/>}/>
                    <Route path={'comments'} element={<Comments/>}>
                        <Route path={':postId'} element={<Posts/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;


