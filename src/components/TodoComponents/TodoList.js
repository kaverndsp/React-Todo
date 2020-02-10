import Todo from "./Todo";


// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

const TodoList = (props) => {
// console.log(props);
    return(

        <div>
{/* receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array. */}
        {props.todo.map(item => (
            <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
        ))}
        
        </div>
    )


}

export default TodoList;