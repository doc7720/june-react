import {useEffect, useState} from "react";

import {todoService} from "../../services/todo.service";
import Todo from "../todo/Todo";


function Todos() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {

        todoService.getAll().then(({data}) => setTodos(data));

    }, []);


    return (
        <div>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    );
}

export default Todos;