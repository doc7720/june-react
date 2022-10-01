import {useReducer} from "react";


const reducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case 'addDog':
            return {...state, dogs: [...state.dogs, {name: payload, id: Date.now()}]}
        case  'deleteDog':
            return {...state, dogs: state.dogs.filter(dog => dog.id !== payload)}
    }
}


const DogReducer = () => useReducer(reducer, {dogs: []});

export {DogReducer}