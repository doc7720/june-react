import {Outlet} from "react-router-dom";

import Headers from "../components/headers/Headers";

function MainLayout() {

    return (
        <div>
            <Headers/>
            <Outlet/>
        </div>
    );
}

export default MainLayout;