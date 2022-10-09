import {useDispatch} from "react-redux";

import {carActions} from "../../redux";


function Car({car}) {

    const dispatch = useDispatch();

    return (
        <div>
            <div>id: {car.id}</div>
            <div>model: {car.model}</div>
            <div>price: {car.price}</div>
            <div>year: {car.year}</div>
            <button onClick={() => dispatch(carActions.setCarForUpdate({car}))}>update</button>
            <button onClick={() => dispatch(carActions.deleteCarById(car.id))}>delete</button>
            <hr/>
        </div>
    );
}

export default Car;
