import {useEffect, useState} from "react";

import Space from "../space/Space";


const SpaceX = () => {

    let [space, setSpace] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(value => value.json())
            .then(value => {
                setSpace(value.filter(value => value.launch_year !== "2020"))
            })
    }, [])


    return (
        <div>
            {space.map((space, index) => <Space key={index} item={space}/>)}
        </div>
    )

}

export default SpaceX;