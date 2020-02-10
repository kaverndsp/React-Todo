import React, {Component} from "react";


class TodoForm extends Component {
constructor(){
    super()
}

render(){
    return(
        <form>
            <input type="text" />
            <button>Add Todo</button>
            <button>Clear Todo</button>
            
        </form>
    )
}

}


export default TodoForm;