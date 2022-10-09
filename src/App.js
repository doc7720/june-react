import './App.css';
import {Route, Routes} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";


function App() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'users'} element={<UserPage/>}/>
                    <Route path={'posts'} element={<PostPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;


