import {useReducer} from "react";


const reducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case 'addCat' :
            return {...state, cats: [...state.cats, {name: payload, id: Date.now()}]}
        case 'deleteCat' :
            return {...state, cats: state.cats.filter(cat => cat.id !== payload)}
    }
}

const CatReducer = () => useReducer(reducer, {cats: []});


export {CatReducer}